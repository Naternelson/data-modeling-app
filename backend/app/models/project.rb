class Project < ApplicationRecord
    belongs_to :user 
    validate_presence_of [:name, :status, :model, :attachment]
end
