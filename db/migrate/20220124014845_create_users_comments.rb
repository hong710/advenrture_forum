class CreateUsersComments < ActiveRecord::Migration[7.0]
  def change
    create_table :users_comments do |t|
      t.references :user
      t.references :comment
      t.timestamps
    end
  end
end
