import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
const AddPost = () => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [img, setImg] = useState(null);
  const postHandler = async (e) => {
    e.preventDefault();
    if (!title || !desc || !img) {
      toast.error("All fields are required")
    } else {
      const url = "http://localhost:8000/api";
      try {
        const res = await axios.post(`${url}/post`, {
          title: title,
          description: desc,
          image: img
        }, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        })
        if (res.status == 200) {
          toast.success(`${res.data.message}`);
          navigate('/login')
        } else if (res.status == 203) {
          toast.error(`${res.data.message}`);
        } else {
          toast.error(`${res.data.message}`);
        }
      } catch (error) {
        toast.error("Server Error")
        console.log('Server Error ------',error);
      }
    }
  }
  return (
    <form className="vh-100" style={{ backgroundColor: '#2779e2' }} onSubmit={postHandler}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-9">
            <h1 className="text-white mb-4">Create new post</h1>
            <div className="card" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Title</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input type="text" className="form-control form-control-lg" onChange={(e) => setTitle(e.target.value)} />
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Description</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <textarea className="form-control" rows="3" placeholder="Description" onChange={(e) => setDesc(e.target.value)}></textarea>
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Image</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input className="form-control form-control-lg" id="formFileLg" type="file" onChange={(e) => setImg(e.target.files[0])} />
                    <div className="small text-muted mt-2">Upload an image file. Max file size 50 MB</div>
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="px-5 py-4">
                  <button type="submit" className="btn btn-primary btn-lg">Add post</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddPost;
