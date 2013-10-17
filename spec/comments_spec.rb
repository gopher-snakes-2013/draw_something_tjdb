require 'spec_helper'

feature 'user may leave a comment for a drawing' do
  scenario 'when user leaves a comment on a form and clicks submit, comment is displayed' do
    visit '/'
    fill_in "comment_text", with: "Wow, thats the best Hello Kitty ever!"
    click_on "Submit"
    expect(page).to have_content("Wow, thats the best Hello Kitty ever!")
  end
end

describe Comment do
  it 'a comment can be created and stored to DB' do
    comment = Comment.create!(text: "Hey there")
    foundComment = Comment.last
    expect(comment).to eql foundComment
  end
  
  it { should belong_to(:drawing) }
end
