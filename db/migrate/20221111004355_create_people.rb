class CreatePeople < ActiveRecord::Migration[6.1]
  def change
    create_table :people do |t|
      t.string :salutation
      t.string :first_name
      t.string :last_name

      t.timestamps
    end
  end
end
