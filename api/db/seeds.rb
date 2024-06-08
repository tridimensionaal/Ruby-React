# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# # db/seeds.rb
require 'json'

file_path = Rails.root.join('db', 'posts_example.json')

posts = JSON.parse(File.read(file_path))

posts.each do |post|
  Post.create(name: post['name'], description: post['description'])
end
