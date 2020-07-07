class User < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true
    validates :password, length: { minimum: 5, allow_nil: true } 
    validates :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true

    after_initialize :ensure_session_token

    has_many :songs,
    foreign_key: :artist_id,
    class_name: :Song,
    dependent: :destroy

    has_many :albums,
    foreign_key: :artist_id,
    class_name: :Album,
    dependent: :destroy

    has_one_attached :photo

    attr_reader :password

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        encrypted = BCrypt::Password.new(self.password_digest)
        encrypted.is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(username: email)
        if user 
          return nil unless user && user.is_password?(password)
        else
          user = User.find_by(email: email)
          return nil unless user && user.is_password?(password)
        end
        
        user
    end
end
