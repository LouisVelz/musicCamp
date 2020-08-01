
json.partial! 'api/users/user', user: @user

if @user.photo.attached?
  json.photoUrl url_for(@user.photo)
else
  json.photoUrl image_url('no-image-available.png')
end

