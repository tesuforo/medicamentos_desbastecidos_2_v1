import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tasks where tasks.done = 0 ORDER BY createAt ASC"

    //  "SELECT tasks.id, tasks.title, tasks.departamento, tasks.tipoid, tasks.numeroid, tasks.nombre, tasks.telefono1, tasks.telefono2, tasks.correoelectronico, tasks.gestante, tasks.pertenece_programa, tasks.especialidad_formulo_medicamento, tasks.fecha_vigencia_formula, tasks.md_medicamento, tasks.observaciones_enfermera, tasks.description, tasks.descripciones, tasks.done, tasks.createAt, tasks.md_medicamento_dos, links.estado, links.prestador FROM tasks INNER JOIN links ON tasks.md_medicamento = links.title;"

    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM  tasks where id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Medicamento No Registrado" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
  const {
    title,
    departamento,
    tipoid,
    numeroid,
    nombre,
    telefono1,
    telefono2,
    correoelectronico,
    gestante,
    pertenece_programa,
    especialidad_formulo_medicamento,
    fecha_vigencia_formula,
    md_medicamento,
    descripciones,
    md_medicamento_dos,
    remite,
  } = req.body;
  const [result] = await pool.query(
    "INSERT INTO tasks (title,departamento,tipoid,numeroid,nombre,telefono1,telefono2,correoelectronico,gestante,pertenece_programa,especialidad_formulo_medicamento,fecha_vigencia_formula,md_medicamento,descripciones,md_medicamento_dos) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      title,
      departamento,
      tipoid,
      numeroid,
      nombre,
      telefono1,
      telefono2,
      correoelectronico,
      gestante,
      pertenece_programa,
      especialidad_formulo_medicamento,
      fecha_vigencia_formula,
      md_medicamento,
      descripciones,
      md_medicamento_dos,
      remite,
    ]
  );
  console.log(result);
  res.json({
    id: result.insertId,
    title,
    departamento,
    tipoid,
    numeroid,
    nombre,
    telefono1,
    telefono2,
    correoelectronico,
    gestante,
    pertenece_programa,
    especialidad_formulo_medicamento,
    fecha_vigencia_formula,
    md_medicamento,
    descripciones,
    md_medicamento_dos,
    remite,
  });
  console.log(result);

  res.send("creando solicitud Medicamento desabastecido");

} catch (error) {
  return res.status(500).json({ message: error.message });
}
};



export const updateTask = async (req, res) => {
  try {
  const result = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  res.json(result);
} catch (error) {
  return res.status(500).json({ message: error.message });
}
};

export const deleteTask = async (req, res) => {
  try {
  const [result] = await pool.query("DELETE  FROM tasks WHERE id  = ?", [
    req.params.id,
  ]);
  if (result.affectedRows === 0)
    return res
      .status(404)
      .json({ message: "Solicitud de Medicamento no Registrada" });
  return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
