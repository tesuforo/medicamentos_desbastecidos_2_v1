import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";



function TaskForm() {

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
          fecha_vigencia_formula: "",
          md_medicamento: "",
          md_medicamento_dos: "",
          descripciones: "",
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
          fecha_vigencia_formula: task.fecha_vigencia_formula,
          md_medicamento: task.md_medicamento,
          md_medicamento_dos: task.md_medicamento_dos,
          descripciones: task.descripciones,
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
        navigate("*");
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
          fecha_vigencia_formula: "",
          md_medicamento: "",
          md_medicamento_dos: "",
          descripciones: "",

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

            <label className="block" htmlFor="pertenece_programa">pertenece a un programa </label>
            <select name="pertenece_programa" onChange={handleChange} value={values.pertenece_programa}>

              <option value="">Seleccione </option>
              <option value="Deabetes">Deabetes</option>
              <option value="Hipertension">Hipertensión</option>
              <option value="ERC">ERC</option>
            </select>

            <label className="block" htmlFor="especialidad_formulo_medicamento">
              Especialidad quien Formulo el Medicamento </label>
            <select name="especialidad_formulo_medicamento" onChange={handleChange} value={values.especialidad_formulo_medicamento}>

              <option value="">Seleccione </option>
              <option value="Medicina Interna">Medicina Interna</option>
              <option value="Medicina General">Medician General</option>
            </select>

            <label className="block" htmlFor="fecha_vigencia_formula"> Fecha Vigencia Formula</label>
            <input
              id="fecha_vigencia_formula"
              name="fecha_vigencia_formula"
              type="date"
              className="px-2 py-1 rounded-sm w-full"
              placeholder="Fecha Vigencia Formula"
              onChange={handleChange}
              value={values.fecha_vigencia_formula}
            />



            <label htmlFor="md_medicamento">MD Medicamento </label>
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

export default TaskForm;
