import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import formula from '../assets/img/MED0012x_100.jpg'
import formula1 from '../assets/img/form.png'


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

      <h3 className="text-3xl font-bold underline"> {params.id ?  "Revisar Solicitudes " : "Bienvenido" }  </h3>

     <div className="flex flex-wrap justify-center">
<div className="w-6/12 sm:w-4/12 px-16">
  <img src={formula1} alt="..." className="shadow-lg rounded max-w-full h-auto align-middle border-none" />
</div>
</div>
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
              {params.id ? "Editar Solicitud" : "Formulario "}
            </h1>


            <label className="block" htmlFor="departamento">Departamento*</label>
            <select name="departamento" onChange={handleChange} value={values.departamento}>
              <option value="Cundinamarca">Cundinamarca</option>

            </select>

            <label className="block" htmlFor="title">Sede*</label>
            <select name="title" onChange={handleChange} value={values.title}>
              <option value="Bienestar Soacha">Bienestar Soacha</option>

            </select>



            <label className="block" htmlFor="tipoid">Tipo de Identificación* </label>
            <select name="tipoid" onChange={handleChange} value={values.tipoid}>
              <option value="">Seleccione </option>
              <option value="CC">CC</option>
              <option value="RC">RC</option>
              <option value="CE">CE</option>
              <option value="TI">TI</option>
                 <option value="PA">PA</option>
            </select>

            <label className="block" htmlFor="numeroid">Número de Identificación* </label>
            <input
              type="text"
              name="numeroid"
              placeholder="Digite Numero de Identificación"
              className="px-4 py-2 rounded-sm w-full"
              onChange={handleChange}
              value={values.numeroid}
            />

            <label htmlFor="nombre">Nombres y Apellidos*</label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombres y Apellidos"
              className="px-4 py-2 rounded-sm w-full"
              onChange={handleChange}
              value={values.nombre}
            />

            <label htmlFor="telefono1">Télefono de contacto*</label>
            <input
              type="text"
              name="telefono1"
              placeholder="Celular"
              className="px-4 py-2 rounded-sm w-full"
              onChange={handleChange}
              value={values.telefono1}
            />

            <label htmlFor="telefono2">Télefono 2</label>
            <input
              type="text"
              name="telefono2"
              placeholder="Celular Opcional"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.telefono2}
            />

            <label htmlFor="correoelectronico">Correo Electrónico* </label>
            <input
              type="text"
              name="correoelectronico"
              placeholder="Correo Electronico"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.correoelectronico}
            />

            <label  className="block" htmlFor="gestante">Gestante* </label>
            <select name="gestante" onChange={handleChange} value={values.gestante}>
              <option value="">Gestante ? </option>
              <option value="SI">Si</option>
              <option value="No">No</option>
            </select>


            <label className="block" htmlFor="pertenece_programa">Pertenece a un programa? </label>
            <select name="pertenece_programa" onChange={handleChange} value={values.pertenece_programa}>

              <option value="No pertenezco a algún programa">No pertenezco a algún programa </option>
              <option value="Hipertensión">Hipertensión</option>
              <option value="Diabetes">Diabetes</option>
              <option value="Nefroprotección">Nefroprotección</option>
              <option value="Gestantes">Gestantes</option>
            </select>







            <label className="block" htmlFor="especialidad_formulo_medicamento">
              Especialidad quien Formulo Medicamento </label>
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
            <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-350">
    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={formula} alt="" width="350" height="512"/>
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p class="text-lg font-medium">
       <h4> <  label className="block"  htmlFor="md_medicamento">MD Medicamento </label> </h4>
        </p>
      </blockquote>
      <figcaption class="font-medium">
        <input
                id="md_medicamento"
                name="md_medicamento"
                type="text"
                className="px-2 py-1 rounded-sm w-full"
                placeholder="Registrar"
                onChange={handleChange}
                value={values.md_medicamento}
              />
        <div class="text-slate-700 dark:text-slate-200">

        </div>
      </figcaption>
    </div>
  </figure>
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


            <label className="block" htmlFor="fecha_vigencia_formula"> Fecha Vigencia Formula *</label>
            <input
              id="fecha_vigencia_formula"
              name="fecha_vigencia_formula"
              type="date"
              className="px-2 py-1 rounded-sm w-full"
              placeholder="Fecha Vigencia Formula"
              onChange={handleChange}
              value={values.fecha_vigencia_formula}
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

              {isSubmitting ? "Enviando.." : "Enviar"}
              </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
