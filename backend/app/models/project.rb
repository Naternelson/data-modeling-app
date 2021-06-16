class Project < ApplicationRecord
    STATUSTYPES = { 
        uninitiated: "uninitiated",
        progress: "in_progress",
        error: "error",
        complete: "complete"
    }
    belongs_to :user 
    validate_presence_of [:name, :status, :model, :attachment]
    mount_uploader :attachment, AttachmentUploader

    
end
