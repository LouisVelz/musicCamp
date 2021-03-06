

json.array! @users do |user|
  if user.photo.attached?
    json.partial! 'api/users/user', user: user
    json.photoUrl url_for(user.photo)
  end
end