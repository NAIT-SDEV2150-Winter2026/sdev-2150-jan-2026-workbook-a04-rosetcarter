import { useNavigate, useParams } from 'react-router';
import { useState, useEffect } from 'react';

import ResourceForm from '../components/ResourceForm';

import { useResources } from '../hooks/useResources';
import Card from '../components/ui/Card';

const EMPTY_FORM_DATA = {
  title: '',
  category: '',
  summary: '',
  location: '',
  hours: '',
  contact: '',
  virtual: false,
  openNow: false,
};

export default function AdminPage() {
  const { resources, addResource, isLoading, error, refetch } = useResources();

  async function handleCreateResource(e, formData) {
    e.preventDefault();
    const isEditing = Boolean(resourceId);
    const url = isEditing
      ? `http://localhost:3000/resources/${resourceId}`
      : 'http://localhost:3000/resources';

    const method = isEditing ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error(`Could not ${isEditing ? 'update' : 'create'} resource`);
    }

    const savedResource = await res.json();
    await refetch();

    navigate(`/admin/${savedResource.id}`);
  }

  const { resourceId } = useParams();
  const navigate = useNavigate();
  let initialFormData = EMPTY_FORM_DATA;
  let currentResource = null;
  if(resourceId) {
    currentResource = resources.find((item) => item.id === resourceId);
    if(currentResource) {
      initialFormData = {
        title: currentResource.title,
        category: currentResource.category,
        summary: currentResource.summary,
        location: currentResource.location,
        hours: currentResource.hours,
        contact: currentResource.contact,
        virtual: currentResource.virtual,
        openNow: currentResource.openNow,
      };
    }
  }
  function handleEditStart(resource) {
    navigate(`/admin/${resource.id}`);
  }
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Admin</h1>
        <p className="text-sm text-base-content/70">
          Manage student resources.
        </p>
      </div>

      {isLoading && <p>Loading resources...</p>}

      {error && (
        <div className="alert alert-error">
          <span>{error.message}</span>
          <button className="btn btn-sm" onClick={refetch}>Try again</button>
        </div>
      )}

      <section className="md:col-span-3 lg:col-span-3">
      
      {(!resourceId || currentResource) && (
      <ResourceForm
        key={resourceId ?? 'new'}
        initialData={initialFormData}
        isEditing={Boolean(resourceId)}
        onSubmit={handleCreateResource}
        onReset={() => navigate('/admin')}
      />
      )}
      </section>

      <section className="md:col-span-3 lg:col-span-3">
        <Card title="Current Resources">
          <div className="card-body">
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li 
                  key={resource.id} 
                  className="rounded border border-gray-200 p-3 cursor-pointer hover:border-sky-400"
                  onClick={() => handleEditStart(resource)}
                >
                  <p className="font-semibold">{resource.title}</p>
                  <p className="text-sm text-base-content/70">{resource.category}</p>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </section>
    </>
  );
};