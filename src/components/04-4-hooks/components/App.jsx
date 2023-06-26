import { useState, useEffect } from 'react';
import { Layout } from './Layout';
import { MaterialEditorForm } from './MaterialEditorForm/MaterialEditorForm';
import { MaterialList } from './MaterialList/MaterialList';
import * as API from '../services/api';

export const App = () => {
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMaterials() {
      try {
        setIsLoading(true);
        const materials = await API.getMaterials();
        setMaterials(materials);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
        console.log(error);
      }
    }
    fetchMaterials();
  }, []);

  const addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      setMaterials(prevMaterials => [...prevMaterials, material]);
    } catch (error) {
      setError(true);
      setIsLoading(false);
      console.log(error);
    }
  };

  const deleteMaterial = async id => {
    try {
      await API.deleteMaterial(id);
      setMaterials(prevMaterials =>
        prevMaterials.filter(material => material.id !== id)
      );
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const updateMaterial = async fields => {
    try {
      const updatedMaterial = await API.updateMaterial(fields);
      setMaterials(prevMaterials =>
        prevMaterials.map(material =>
          material.id === fields.id ? updatedMaterial : material
        )
      );
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <Layout>
      {error && (
        <p>Oops! Something went wrong :( Reload the page and try again once</p>
      )}
      <MaterialEditorForm onSubmit={addMaterial} />
      {isLoading ? (
        'Loading materials...'
      ) : (
        <MaterialList
          items={materials}
          onDelete={deleteMaterial}
          onUpdate={updateMaterial}
        />
      )}
    </Layout>
  );
};
