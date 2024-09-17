import React, { useEffect, useState } from 'react';

function AdminDashboard() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/admin/files')
            .then(response => response.json())
            .then(data => setFiles(data))
            .catch(error => console.error('Error fetching files:', error));
    }, []);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>Uploaded Files</h2>
            <ul>
            {files.map((file) => (
             <li key={file.path}> {/* Use file.path as the key */}
            <a href={`http://localhost:5000/${file.path}`} download={file.originalname}>
            {file.originalname}
            </a> (Uploaded on: {new Date(file.uploadTime).toLocaleString()})
            </li>
          ))}
        </ul>

        </div>
    );
}

export default AdminDashboard;
