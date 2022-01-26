# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

i=0

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

user_arr = [
    "https://randomuser.me/api/portraits/men/94.jpg",
    "https://randomuser.me/api/portraits/men/28.jpg",
    "https://randomuser.me/api/portraits/men/64.jpg",
    "https://randomuser.me/api/portraits/men/81.jpg",
    "https://randomuser.me/api/portraits/women/67.jpg",
    "https://randomuser.me/api/portraits/women/85.jpg",
    "https://randomuser.me/api/portraits/women/60.jpg",
    "https://randomuser.me/api/portraits/women/42.jpg",
    "https://randomuser.me/api/portraits/women/72.jpg",
    "https://randomuser.me/api/portraits/men/14.jpg"
]


10.times do
    i = i + 1
    User.create(email:Faker::Internet.email, user_img:user_arr[i-1] ,f_name: Faker::Name.first_name, l_name: Faker::Name.last_name)
end
puts "done seeding users"


url_arr =[
    "https://images.unsplash.com/photo-1511715885542-a3713331633d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1514773695487-157e98d68afd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1476979735039-2fdea9e9e407?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1493244040629-496f6d136cc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2049&q=80",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1519327567471-ae47752b8089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    "https://images.unsplash.com/photo-1582711012124-a56cf82307a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2140&q=80",
    "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
]

puts "seeding posts"

j = 0
10.times do
    j = j + 1
    Post.create(user_id: User.all.sample.id, post_url:url_arr[j-1] ,post_title: Faker::Lorem.sentence, content: Faker::Lorem.paragraph, published: true)
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





