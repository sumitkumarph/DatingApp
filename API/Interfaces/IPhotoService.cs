using System;
using CloudinaryDotNet.Actions;

namespace API.Interfaces;

public interface IPhotoService
{
    Task<ImageUploadResult> UploadPhotAsync(IFormFile file);

    Task<DeletionResult> DeletePhotoAsync(string publicId);
}
