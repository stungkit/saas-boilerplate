import factory
from django.contrib.auth import hashers
from django.contrib.auth.models import Group

from common.acl.helpers import CommonGroups


class GroupFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Group
        django_get_or_create = ('name',)

    name = factory.Sequence(lambda n: "Group #%s" % n)


class UserFactory(factory.DjangoModelFactory):
    class Meta:
        model = "users.User"

    id = factory.Sequence(lambda n: n)
    email = factory.Faker("email")
    is_superuser = False

    @classmethod
    def _create(cls, *args, **kwargs):
        plain_password = kwargs.pop('password', 'secret')
        password = hashers.make_password(plain_password)
        user = super()._create(*args, **kwargs, password=password)
        setattr(user, '_faker_password', plain_password)
        return user

    @factory.post_generation
    def groups(self, create, extracted, **kwargs):
        user_group, created = Group.objects.get_or_create(name=CommonGroups.User)
        self.groups.add(user_group)

        if not create:
            return

        if extracted:
            for group in extracted:
                if type(group) == str:
                    group_obj, created = Group.objects.get_or_create(name=group)
                    self.groups.add(group_obj)
                else:
                    self.groups.add(group)

    @factory.post_generation
    def admin(self, create, extracted, **kwargs):
        if extracted is None:
            return

        user_group, created = Group.objects.get_or_create(name=CommonGroups.Admin)
        self.groups.add(user_group)
        self.is_superuser = True


class UserProfileFactory(factory.DjangoModelFactory):
    class Meta:
        model = "users.UserProfile"

    user = factory.SubFactory(UserFactory)
    first_name = factory.Faker("first_name", locale="pl")
    last_name = factory.Faker("last_name", locale="pl")
