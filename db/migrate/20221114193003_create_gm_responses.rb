class CreateGmResponses < ActiveRecord::Migration[7.0]
  def change
    create_table :gm_responses do |t|
      t.string :response

      t.timestamps
    end
  end
end
