import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";



function TaskForm_edit() {

  const {createTask, getTask,updateTask}  = useTasks();

 const [task, setTask] = useState({
          title: "",
          departamento: "",
          tipoid: "",
          numeroid: "",
          nombre: "",
          telefono1: "",
          telefono2: "",
          correoelectronico: "",
          gestante: "",
          pertenece_programa: "",
          especialidad_formulo_medicamento: "",
       
          md_medicamento: "",
          md_medicamento_dos: "",
          descripciones: "",
          description: "",
          observaciones_enfermera: "",
          medico_del_caso: "",

  });

  const params = useParams()
  const navigate  = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setTask({
          title: task.title,
          departamento: task.departamento,
          tipoid: task.tipoid,
          numeroid: task.numeroid,
          nombre: task.nombre,
          telefono1: task.telefono1,
          telefono2: task.telefono2,
          correoelectronico: task.correoelectronico,
          gestante: task.gestante,
          pertenece_programa: task.pertenece_programa,
          especialidad_formulo_medicamento: task.especialidad_formulo_medicamento,
        
          md_medicamento: task.md_medicamento,
          md_medicamento_dos: task.md_medicamento_dos,
          descripciones: task.descripciones,
           description: task.description,
          observaciones_enfermera: task.observaciones_enfermera,
          medico_del_caso: task.medico_del_caso,

        });
      }
    };
    loadTask();
  }, []);

 return (
    <div>

      <h1 className="text-3xl font-bold underline"> {params.id ?  "Revisar Solicitud " : "Nueva Solicitud" }  </h1>

      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);

         if (params.id) {
         await updateTask(params.id, values); 
       
         } else {
           await createTask(values);
         }
        navigate("/");
        setTask({
          title: "",
          departamento: "",
          tipoid: "",
          numeroid: "",
          nombre: "",
          telefono1: "",
          telefono2: "",
          correoelectronico: "",
          gestante: "",
          pertenece_programa: "",
          especialidad_formulo_medicamento: "",
          
          md_medicamento: "",
          md_medicamento_dos: "",
          descripciones: "",
          description: "",
          observaciones_enfermera: "",
          medico_del_caso: "",

        });
        }}
      >
        {({ handleChange, handleSubmit,values, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10">

            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Editar Solicitud" : "Nueva  Solicitud "}
            </h1>
           
           
            <label className="block" htmlFor="title">Sede :</label>
            <select name="title" onChange={handleChange} value={values.title}>
              <option value="">Escoja su Sede</option>
              <option value="Bienestar sur">Bienestar Sur </option>
              <option value="Bienestar Norte">Bienestar Norte</option>
            </select>

            <label className="block" htmlFor="departamento">Departamento :</label>
            <select name="departamento" onChange={handleChange} value={values.departamento}>
              <option value="">Escoja Departamento</option>
              <option value="Cundinamarca">Cundinamarca</option>
              <option value="Bogota DC">Bogota DC</option>
              <option value="Atlantico">Atlantico</option>
            </select>

            <label className="block" htmlFor="tipoid">Tipo de Identificación : </label>
            <select name="tipoid" onChange={handleChange} value={values.tipoid}>
              <option value="">Seleccione </option>
              <option value="CC">CC</option>
              <option value="CE">CE</option>
              <option value="TI">TI</option>
            </select>

            <label className="block" htmlFor="numeroid">Numero de Identificación : </label>
            <input
              type="text"
              name="numeroid"
              placeholder="Digite Numero de Identificación"
              className="px-4 py-2 rounded-sm w-full"
              onChange={handleChange}
              value={values.numeroid}
            />

            <label htmlFor="nombre">Nombres y Apellidos : </label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombres y Apellidos"
              className="px-4 py-2 rounded-sm w-full"
              onChange={handleChange}
              value={values.nombre}
            />

            <label htmlFor="telefono1">Numero de Telefono</label>
            <input
              type="text"
              name="telefono1"
              placeholder="Celular"
              className="px-4 py-2 rounded-sm w-full"
              onChange={handleChange}
              value={values.telefono1}
            />

            <label htmlFor="telefono2">Telefono 2</label>
            <input
              type="text"
              name="telefono2"
              placeholder="Celular Opcional"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.telefono2}
            />

            <label htmlFor="correoelectronico">Email </label>
            <input
              type="text"
              name="correoelectronico"
              placeholder="Correo Electronico"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.correoelectronico}
            />

            <label  className="block" htmlFor="gestante">Gestante : </label>
            <select name="gestante" onChange={handleChange} value={values.gestante}>
              <option value="">Gestante ? </option>
              <option value="SI">Si</option>
              <option value="No">No</option>
            </select>

            <label className="block" htmlFor="pertenece_programa">Pertenece a un programa </label>
            <select name="pertenece_programa" onChange={handleChange} value={values.pertenece_programa}>

              <option value="No pertenezco a algún programa">No pertenezco a algún programa </option>
              <option value="Hipertensión">Hipertensión</option>
              <option value="Diabetes">Diabetes</option>
              <option value="Nefroprotección">Nefroprotección</option>
              <option value="Gestantes">Gestantes</option>
            </select>


            
            <label className="block" htmlFor="especialidad_formulo_medicamento">
              Especialidad quien Formulo el Medicamento </label>
            <select name="especialidad_formulo_medicamento" onChange={handleChange} value={values.especialidad_formulo_medicamento}>

              <option value="">Seleccione </option>
              <option value="MEDICINA GENERAL">MEDICINA GENERAL</option>
              <option value="MEDICINA INTERNA">MEDICINA INTERNA</option>
               <option value="MEDICINA FAMILIAR">MEDICINA FAMILIAR</option>
                <option value="GINECOLOGIA Y OBSTETRICIA">GINECOLOGIA Y OBSTETRICIA</option>
                 <option value="PEDIATRIA">PEDIATRIA</option>
                  <option value="CARDIOLOGIA">CARDIOLOGIA</option>
                   <option value="ENDOCRINOLOGIA">ENDOCRINOLOGIA</option>
                    <option value="CIRUGIA VASCULAR PERIFERICA">CIRUGIA VASCULAR PERIFERICA</option>
                     <option value="NEUMOLOGIA">NEUMOLOGIA</option>
                      <option value="OTORRINOLARINGOLOGIA">OTORRINOLARINGOLOGIA</option>
                      <option value="UROLOGIA">UROLOGIA</option>
                       <option value="ALERGOLOGIA">ALERGOLOGIA</option>
                        <option value="CARDIOLOGIA PEDIATRICA">CARDIOLOGIA PEDIATRICA</option>
                        <option value="CIRUGIA CARDIOVASCULAR">CIRUGIA CARDIOVASCULAR</option>
                         <option value="CIRUGIA DE LA MANO">CIRUGIA DE LA MANO</option>
                          <option value="CIRUGIA DE TORAX">CIRUGIA DE TORAX</option>
                           <option value="CIRUGIA GENERAL">CIRUGIA GENERAL</option>
                            <option value="CIRUGIA INFANTIL O PEDIATRICAMEDICINA INTERNA">CIRUGIA INFANTIL O PEDIATRICA</option>
                             <option value="CIRUGIA MAXILOFACIAL">CIRUGIA MAXILOFACIAL</option>
                              <option value="CIRUGIA ORAL">CIRUGIA ORAL</option>
                               <option value="CIRUGIA PLASTICA">CIRUGIA PLASTICA</option>
                                <option value="DERMATOLOGIA">DERMATOLOGIA</option>
                                 <option value="DOLOR Y CUIDADOS PALIATIVOSUROLOGIA">DOLOR Y CUIDADOS PALIATIVOS</option>
                                  <option value="ENDOCRINOLOGIA PEDIATRICAUROLOGIA">ENDOCRINOLOGIA PEDIATRICAUROLOGIA</option>
                                   <option value="ENDODONCIAUROLOGIA">ENDODONCIAUROLOGIA</option>
                                    <option value="GASTROENTEROLOGIA">GASTROENTEROLOGIA</option>
                                     <option value="MEDICINA FISICA Y REHABILITACION">MEDICINA FISICA Y REHABILITACION</option>
                                      <option value="NEFROLOGIA">NEFROLOGIA</option>
                                       <option value="NEUROCIRUGIA">NEUROCIRUGIA</option>
                                        <option value="NEUROLOGIA">NEUROLOGIA</option>
                                         <option value="UROLOGIA">UROLOGIA</option>
                                          <option value="NEUROLOGIA INFANTIL">NEUROLOGIA INFANTIL</option>
                                           <option value="ORTOPEDIA PEDIATRICA">ORTOPEDIA PEDIATRICA</option>
                                            <option value="ORTOPEDIA Y TRAUMATOLOGIA">ORTOPEDIA Y TRAUMATOLOGIA</option>
                                             <option value="PERIODONCIA">PERIODONCIA</option>
                                              <option value="PSIQUIATRIA">PSIQUIATRIA</option>


            </select>

        



            <label className="block" htmlFor="md_medicamento">MD Medicamento </label>
            <input
              id="md_medicamento"
              name="md_medicamento"
              type="text"
              className="px-2 py-1 rounded-sm w-full"
              placeholder="MD Medicamento"
              onChange={handleChange}
              value={values.md_medicamento}
            />
            <label htmlFor="md_medicamento"> Otro MD Medicamento  </label>
            <input
              id="md_medicamento_dos"
              name="md_medicamento_dos"
              type="text"
              className="px-2 py-1 rounded-sm w-full"
              placeholder="Otro MD Medicamento?"
              onChange={handleChange}
              value={values.md_medicamento_dos}
            />


            <label className="block" htmlFor="descripciones">Observaciones </label>
            <textarea
              name="descripciones"
              id="descripciones"
              rows="3"
              placeholder=" Observaciones "
              onChange={handleChange}
              value={values.descripciones}
            ></textarea>



            <label className="block" htmlFor="description">
              Clasifiación del Caso </label>
            <select name="description" onChange={handleChange} value={values.description}>

              <option value="">Seleccione </option>
              <option value="Medicamento agotado por laboratorio">Medicamento agotado por laboratorio</option>
              <option value="Medicamento con carta INVIMA">Medicamento con carta INVIMA</option>
                <option value="Medicamento con carta INVIMA - Formulación postfechada">Medicamento con carta INVIMA - Formulación postfechada</option>
                  <option value="Formulación realizada por prestador externo NEPS">Formulación realizada por prestador externo NEPS</option>
                    <option value="Formulación realizada por prestador externo BIPS">Formulación realizada por prestador externo BIPS</option>
                      <option value="Otro">Otro</option>
            </select>







            <label className="block" htmlFor="medico_del_caso">
              Medico del Caso </label>
            <select name="medico_del_caso" onChange={handleChange} value={values.medico_del_caso}>

              <option value="Medico Back">Medico Back</option>
           
            </select>

             <label className="block" htmlFor="observaciones_enfermera">Observaciones Enfermeria</label>
            <textarea
              name="observaciones_enfermera"
              id="observaciones_enfermera"
              rows="3"
              placeholder="observaciones_enfermera "
              onChange={handleChange}
              value={values.observaciones_enfermera}
            ></textarea>

<br></br>
<br></br>


            < button class="rounded-full"   
            type="submit" 
            disabled ={isSubmitting}
            className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md">
              
              {isSubmitting ? "Guardando.." : "Guardar"}
              </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm_edit;
