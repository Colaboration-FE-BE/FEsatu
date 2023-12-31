import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import Swal from 'sweetalert2';

const Table = () => {
  const [data, setData] = useState([
    { id: 1, fullName: 'John Doe', email: 'johndoe@example.com', team: 'Tim A', role: 'Pegawai', status: 'Aktif' },
    { id: 2, fullName: 'Jane Smith', email: 'janesmith@example.com', team: 'Tim B', role: 'Manajer', status: 'Tidak Aktif' },
  ]);

  const handleDelete = (itemId:any) => {
    // Tampilkan SweetAlert untuk konfirmasi penghapusan
    Swal.fire({
      title: 'Konfirmasi',
      text: 'Apakah Anda yakin ingin menghapus data ini?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
    }).then((result:any) => {
      if (result.isConfirmed) {
        // Jika pengguna mengonfirmasi penghapusan, lakukan penghapusan di sini
        const updatedData = data.filter((item) => item.id !== itemId);
        setData(updatedData);
        Swal.fire('Terhapus!', 'Data telah dihapus.', 'success');
      }
    });
  };

  return (
    <Layout> {/* Gunakan komponen Layout di sini */}
      <div className="flex justify-between items-center mb-4">
        <Link to="/newuser" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Tambah
        </Link>
        <input
          type="text"
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          placeholder="Cari..."
        />
      </div>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Full Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Team</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.fullName}</td>
              <td className="border px-4 py-2">{item.email}</td>
              <td className="border px-4 py-2">{item.team}</td>
              <td className="border px-4 py-2">{item.role}</td>
              <td className="border px-4 py-2">{item.status}</td>
              <td className="flex border px-4 py-2 justify-center items-center h-20">
                <Link to={`/updateuser/`} className="text-blue-500 hover:text-blue-700 cursor-pointer">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
                <span className="ml-2 text-red-500 hover:text-red-700 cursor-pointer">
                  <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(item.id)} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Table;
