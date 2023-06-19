import { pool } from '../db.js'

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM employees')
    res.json(rows)
  } catch (error) {
    return res.status(500).json(
      {
        message: 'Something goes wrong'
      })
  }
}

export const getEmployee = async (req, res) => {
  try {
    const id = req.params.id
    const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [id])

    if (rows.length <= 0) return res.status(404).json({ message: 'Employee not found' })

    res.json(rows[0])
  } catch (error) {
    return res.status(500).json(
      {
        message: 'Something goes wrong'
      })
  }
}

export const createEmployee = async (req, res) => {
  const { name, role, email, password } = req.body

  try {
    const [rows] = await pool.query('INSERT INTO employees (name, role, email, password) VALUES (?, ?)', [name, role, email, password])
    res.send({
      id: rows.insertId,
      name,
      role, 
      email, 
      password
    })
  } catch (error) {
    return res.status(500).json(
      {
        message: 'Something goes wrong'
      })
  }
}

export const deleteEmployee = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [req.params.id])

    if (result.affectedRows <= 0) return res.status(404).json({ message: 'Employee not found' })

    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json(
      {
        message: 'Something goes wrong'
      })
  }
}

export const updateEmployee = async (req, res) => {
  const { id } = req.params
  const { name, role, email, password } = req.body

  try {
    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), role = IFNULL(?, role), email = IFNULL(?, email), password = IFNULL(?, password), WHERE id = ?', [name, role, email, password, id])

    if (result.affectedRows < 1) return res.status(404).json({ message: 'Employee not found' })

    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
    res.json(rows[0])

  } catch (error) {
    return res.status(500).json(
      {
        message: 'Something goes wrong'
      })
  }
}

