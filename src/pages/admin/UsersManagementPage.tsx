import React, { useState } from 'react';
import { Users, Search, Filter, UserPlus, ChevronDown, ChevronUp } from 'lucide-react';
import AddUserForm from '../../components/admin/AddUserForm';
import EditUserForm from '../../components/admin/EditUserForm';

const UsersManagementPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  // Mock users data
  const [users, setUsers] = useState([
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'patient',
      status: 'active',
      joinedAt: '2024-01-15'
    },
    {
      id: '2',
      name: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@example.com',
      role: 'doctor',
      status: 'pending',
      joinedAt: '2024-02-20'
    }
  ]);

  const handleAddUser = (userData: any) => {
    const newUser = {
      id: String(users.length + 1),
      ...userData,
      joinedAt: new Date().toISOString().split('T')[0]
    };
    setUsers([...users, newUser]);
    setShowAddForm(false);
  };

  const handleEditUser = (userData: any) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userData.id ? { ...user, ...userData } : user
      )
    );
    setSelectedUser(null);
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Users className="h-8 w-8 text-primary-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Users Management</h1>
            <p className="text-gray-600 mt-1">Manage and monitor user accounts</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
                {showFilters ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => setShowAddForm(true)}
              >
                <UserPlus className="h-5 w-5 mr-2" />
                Add User
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterRole('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    filterRole === 'all'
                      ? 'bg-gray-900 text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  All Users
                </button>
                <button
                  onClick={() => setFilterRole('patient')}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    filterRole === 'patient'
                      ? 'bg-blue-100 text-blue-800 border border-blue-200'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Patients
                </button>
                <button
                  onClick={() => setFilterRole('doctor')}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    filterRole === 'doctor'
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Doctors
                </button>
                <button
                  onClick={() => setFilterRole('admin')}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    filterRole === 'admin'
                      ? 'bg-purple-100 text-purple-800 border border-purple-200'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Admins
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Joined
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                        <span className="text-primary-700 font-medium">
                          {user.name.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.role === 'doctor' ? 'bg-green-100 text-green-800' :
                      user.role === 'admin' ? 'bg-purple-100 text-purple-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.status === 'active' ? 'bg-green-100 text-green-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(user.joinedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      className="text-primary-600 hover:text-primary-900"
                      onClick={() => setSelectedUser(user)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAddForm && (
        <AddUserForm
          onClose={() => setShowAddForm(false)}
          onSubmit={handleAddUser}
        />
      )}

      {selectedUser && (
        <EditUserForm
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onSubmit={handleEditUser}
        />
      )}
    </div>
  );
};

export default UsersManagementPage;