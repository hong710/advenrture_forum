# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "seeding categories"
category1 = Category.create(category_title: "Hiking")
category2 = Category.create(category_title: "Food")
category3 = Category.create(category_title: "Music Festivals")
category5 = Category.create(category_title: "Scuba Diving")
puts "done seeding categories"

puts "seeding comments"
10.times do
Comment.create(comment: Faker::Lorem.sentence)
end
puts "done seeding comments"

puts "seeding users"
10.times do
    User.create(email:Faker::Internet.email, f_name: Faker::Name.first_name, l_name: Faker::Name.last_name)
end
puts "done seeding users"

puts "seeding posts"
10.times do
    Post.create(user_id: User.all.sample.id, post_title: Faker::Lorem.sentence, content: Faker::Lorem.paragraph, published: true)
end
puts "done seeding posts"

puts "seeding users comments"
10.times do
    UsersComment.create(user_id: User.all.sample.id, comment_id: Comment.all.sample.id)
end
puts "done seeding users comments"

puts "seeding posts comments"
10.times do
    PostsComment.create(post_id: Post.all.sample.id, comment_id: Comment.all.sample.id)
end
puts "done seeding posts comments"

puts "seeding posts categories"
10.times do
    PostsCategory.create(post_id: Post.all.sample.id, category_id: Category.all.sample.id)
end
puts "done seeding posts categories"





