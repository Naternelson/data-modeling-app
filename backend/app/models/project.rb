class Project < ApplicationRecord
    STATUSTYPES = { 
        uninitiated: "uninitiated",
        progress: "computing",
        error: "error",
        paused: "paused",
        complete: "complete"
    }
    belongs_to :user 
    validates_presence_of [:name, :status, :model, :attachment]
    validates :status, inclusion: {in: STATUSTYPES.values}
    mount_uploader :attachment, AttachmentUploader
    
end
