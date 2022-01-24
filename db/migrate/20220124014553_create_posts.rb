class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.references :user
      t.string :post_title
      t.string :content
      t.boolean :published
      t.timestamps
    end
  end
end
