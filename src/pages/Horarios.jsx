import React from 'react'
import { Table, Tag } from "antd";
import "../styles/horarios.scss"

function Horarios() {

    const disciplinaCores = {
        "Matemática": "#DA2C38",
        "Física": "#4FCFD1",
        "Química": "#A390E4",
        "Biologia": "#5CD14F",
        "Redação": "#3993DD",
        "Gramática": "#56CBF9",
        "Literatura": "gold",
        "História": "cyan",
        "Geografia": "red",
        "Sociologia": "yellow",
        "Filosofia": "pink",
        "Inglês": "gray"
    }

    const columns = [
        {
            title: "Horário", dataIndex: "horario", key: "horário",
            render: (text) => <a className='horario'>{text}</a>,
            align: "center"
        },
        {
            title: "Segunda", dataIndex: "segunda", key: "segunda",
            render: (item) => item && (
                <Tag color={disciplinaCores[item.disciplina]}>
                    {item.nome}<br />{item.disciplina}
                </Tag>
            ),
            align: "center"
        },
        {
            title: "Terça", dataIndex: "terca", key: "terca",
            render: (item) => item && (
                <Tag color={disciplinaCores[item.disciplina]}>
                    {item.nome}<br />{item.disciplina}
                </Tag>
            ),
            align: "center"
        },
        {
            title: "Quarta", dataIndex: "quarta", key: "quarta",
            render: (item) => item && (
                <Tag color={disciplinaCores[item.disciplina]}>
                    {item.nome}<br />{item.disciplina}
                </Tag>
            ),
            align: "center"
        },
        {
            title: "Quinta", dataIndex: "quinta", key: "quinta",
            render: (item) => item && (
                <Tag color={disciplinaCores[item.disciplina]}>
                    {item.nome}<br />{item.disciplina}
                </Tag>
            ),
            align: "center"
        },
        {
            title: "Sexta", dataIndex: "sexta", key: "sexta",
            render: (item) => item && (
                <Tag color={disciplinaCores[item.disciplina]}>
                    {item.nome}<br />{item.disciplina}
                </Tag>
            ),
            align: "center"
        },
    ]

    const dataSource = [

        {horario: "08:00", 
            segunda: { nome: "Renan Augusto", disciplina: "Matemática" }, 
            terca: "", 
            quarta: "", 
            quinta: { nome: "Carlos", disciplina: "Biologia" }, 
            sexta: ""
        },

        {horario: "Intervalo", segunda: "", terca: "", quarta: "", quinta: "", sexta: ""},

        {horario: "09:30", 
            segunda: "", 
            terca: "", 
            quarta: "",
            quinta: { nome: "Duddy", disciplina: "Literatura" }, 
            sexta: { nome: "Rafael", disciplina: "Filosofia" }
        },

        {horario: "10:45", segunda: "", terca: "", quarta: "", quinta: "", sexta: ""},

        {horario: "-----", segunda: "", terca: "", quarta: "", quinta: "", sexta: ""},

        {horario: "14:00", 
            segunda: "", 
            terca: "", 
            quarta: "", 
            quinta: { nome: "Ana Luiza", disciplina: "Matemática" }, 
            sexta: { nome: "Coutinho", disciplina: "História" }
        },

        {horario: "Intervalo", segunda: "", terca: "", quarta: "", quinta: "", sexta: ""},

        {horario: "15:30", 
            segunda: "", 
            terca: "", 
            quarta: "", 
            quinta: { nome: "Renan", disciplina: "Geografia" }, 
            sexta: ""
        },

        {horario: "16:45", 
            segunda: { nome: "João Guilherme", disciplina: "Física" }, 
            terca: "", 
            quarta: "", 
            quinta: { nome: "Bebel", disciplina: "Química" }, 
            sexta: { nome: "Mariana", disciplina: "Biologia" }
        },

        {horario: "------", 
            segunda: "", terca: "", quarta: "", quinta: "", sexta: ""},

        {horario: "19:00", 
            segunda: { nome: "João Guilherme", disciplina: "Matemática" }, 
            terca: "", 
            quarta: { nome: "Héric", disciplina: "Gramática" }, 
            quinta: { nome: "Danilo", disciplina: "Biologia" }, 
            sexta: { nome: "Jennifer", disciplina: "Redação" }
        },

        {horario: "Intervalo", segunda: "", terca: "", quarta: "", quinta: "", sexta: ""},

        {
            horario: "20:20",
            segunda: { nome: "Uriel", disciplina: "História" }, 
            terca: "", 
            quarta: { nome: "Arthur", disciplina: "Química" }, 
            quinta: "", 
            sexta: { nome: "Jovi", disciplina: "Matemática" }
        },

        {
            horario: "21:25",
            segunda: "", 
            terca: "", 
            quarta: { nome: "Luquinhas", disciplina: "Física" }, 
            quinta: "", 
            sexta: { nome: "Alessandra", disciplina: "Biologia" }
        }
    ]

    return (
        <div className='horarios-container'>
            <div className="table-container">

            <span>Pré-Vestibular</span>

            <Table 
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                style={{ width: '1200px' }} 
                rowClassName={() => 'custom-row-height'}
            />

            </div>

        </div>
    )
}

export default Horarios
