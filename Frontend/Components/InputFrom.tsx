import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const InputForm = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        navigate("/");
    };

  return (
    <div className="form-container">
      <h2>Car Management Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        CAR TITLE
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            {...register('title', { required: 'Title is required' })}
          />
          {errors.title?.message && (
            <p className="error-message">{String(errors.title.message)}</p>
          )}
        </div>
        <br></br>

        DESCRIPTION
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'Description is required' })}
          />
          {errors.description?.message && (
            <p className="error-message">{String(errors.description.message)}</p>
          )}
        </div>

        <br></br>

        TAGS
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input
            id="tags"
            type="text"
            placeholder="e.g. SUV, Sedan"
            {...register('tags', { required: 'Tags are required' })}
          />
          {errors.tags?.message && (
            <p className="error-message">{String(errors.tags.message)}</p>
          )}
        </div>

        <br></br>

        PHOTO
        <div className="form-group">
          <label htmlFor="photo">Upload Photo</label>
          <input
            id="photo"
            type="file"
            {...register('photo')}
          />
          {errors.photo?.message && (
            <p className="error-message">{String(errors.photo.message)}</p>
          )}
        </div>

        <br></br>
        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
