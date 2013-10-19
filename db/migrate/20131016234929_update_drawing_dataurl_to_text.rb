class UpdateDrawingDataurlToText < ActiveRecord::Migration
  def up
    change_column(:drawings, :dataURL, :text)
  end

  def down
    change_column(:drawings, :dataURL, :string)
  end
end
