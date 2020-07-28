import React, { useState } from 'react';

import { initialSection } from './components/menupagedata';
import AppRouter from './routers/AppRouter';
import { useForm } from 'react-hook-form';

function App() {
  const [activeSection, setActiveSection] = useState(initialSection);
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  return (
    <div>
      <AppRouter
        setActiveSection={setActiveSection}
        activeSection={activeSection}
        open={open}
        setOpen={setOpen}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
}

export default App;
