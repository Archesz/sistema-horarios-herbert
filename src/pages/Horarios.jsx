import React, { useState } from 'react';
import { Table, Tag, Select } from "antd";
import "../styles/horarios.scss";

const { Option } = Select;

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
        "Socio/Filo": "pink",
        "Inglês": "gray",
        "Linguagens": "#56CBF9"
    };

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
    ];

    const columnsSab = [
        {
            title: "Horário", dataIndex: "horario", key: "horário",
            render: (text) => <a className='horario'>{text}</a>,
            align: "center"
        },
        {
            title: "Sábado A", dataIndex: "sabadoA", key: "sabado",
            render: (item) => item && (
                <Tag color={disciplinaCores[item.disciplina]}>
                    {item.nome}<br />{item.disciplina}
                </Tag>
            ),
            align: "center"
        },
        {
            title: "Sábado B", dataIndex: "sabadoB", key: "sabado",
            render: (item) => item && (
                <Tag color={disciplinaCores[item.disciplina]}>
                    {item.nome}<br />{item.disciplina}
                </Tag>
            ),
            align: "center"
        },
    ]

    // Definindo 4 DataSources
    const dataSourceVestibular = [
        {
            horario: "08:00",
            segunda: { nome: "Renan Augusto", disciplina: "Física" },
            terca: "",
            quarta: { nome: "Pedro Souza", disciplina: "Matemática" },
            quinta: { nome: "Carlos", disciplina: "Biologia" },
            sexta: { nome: "Rafael", disciplina: "Socio/Filo" }
        },

        { horario: "Intervalo", segunda: "", terca: "", quarta: "", quinta: "", sexta: "" },

        {
            horario: "09:30",
            segunda: { nome: "Vitória", disciplina: "História" },
            terca: { nome: "Hugo", disciplina: "Geografia" },
            quarta: { nome: "Hugo", disciplina: "Geografia" },
            quinta: { nome: "Duddy", disciplina: "Literatura" },
            sexta: { nome: "Mari", disciplina: "História" }
        },

        {
            horario: "10:45",
            segunda: { nome: "Yasmin", disciplina: "Redação" },
            terca: "",
            quarta: { nome: "Danilo", disciplina: "Biologia" },
            quinta: { nome: "Pedro Souza", disciplina: "Matemática" },
            sexta: { nome: "Profeta", disciplina: "Física" }
        },

        { horario: "-----", segunda: "", terca: "", quarta: "", quinta: "", sexta: "" },

        {
            horario: "14:00",
            segunda: { nome: "Sol", disciplina: "História" },
            terca: "",
            quarta: "",
            quinta: { nome: "Ana Luiza", disciplina: "Matemática" },
            sexta: { nome: "Coutinho", disciplina: "História" }
        },

        { horario: "Intervalo", segunda: "", terca: "", quarta: "", quinta: "", sexta: "" },

        {
            horario: "15:30",
            segunda: { nome: "Yasmin", disciplina: "Redação" },
            terca: { nome: "Pedro Lucas", disciplina: "Física" },
            quarta: { nome: "Kaique", disciplina: "Geografia" },
            quinta: { nome: "Alice", disciplina: "Sociologia" },
            sexta: { nome: "Lontra", disciplina: "Matemática" }
        },

        {
            horario: "16:45",
            segunda: { nome: "João Guilherme", disciplina: "Física" },
            terca: { nome: "Bebel", disciplina: "Química" },
            quarta: { nome: "Adri", disciplina: "Linguagens" },
            quinta: { nome: "Renan", disciplina: "Geografia" },
            sexta: { nome: "Mariana", disciplina: "Biologia" }
        },

        {
            horario: "------",
            segunda: "", terca: "", quarta: "", quinta: "", sexta: ""
        },

        {
            horario: "19:00",
            segunda: { nome: "João Guilherme", disciplina: "Matemática" },
            terca: { nome: "Guga", disciplina: "Química" },
            quarta: { nome: "Adri/Héric", disciplina: "Linguagens" },
            quinta: { nome: "Guilherme", disciplina: "Física" },
            sexta: { nome: "Jennifer", disciplina: "Redação" }
        },

        { horario: "Intervalo", segunda: "", terca: "", quarta: "", quinta: "", sexta: "" },

        {
            horario: "20:20",
            segunda: { nome: "Uriel", disciplina: "História" },
            terca: { nome: "Silas", disciplina: "Socio/Filo" },
            quarta: { nome: "Arthur", disciplina: "Química" },
            quinta: { nome: "Kaique", disciplina: "Geografia" },
            sexta: { nome: "Jovi", disciplina: "Matemática" }
        },

        {
            horario: "21:25",
            segunda: "",
            terca: "",
            quarta: { nome: "Luquinhas", disciplina: "Física" },
            quinta: { nome: "Danilo", disciplina: "Biologia" },
            sexta: { nome: "Alessandra", disciplina: "Biologia" }
        }
    ]

    const dataSourceTecnico = [
        {
            horario: "08:00",
            segunda: { nome: "Matheus Pompermayer", disciplina: "Humanidades" },
            terca: "",
            quarta: "",
            quinta: "",
            sexta: ""
        },

        {
            horario: "09:30",
            segunda: { nome: "Caio", disciplina: "Matemática" },
            terca: "",
            quarta: { nome: "Larissa", disciplina: "Química" },
            quinta: "",
            sexta: ""
        },

        {
            horario: "10:45",
            segunda: { nome: "Caio", disciplina: "Matemática" },
            terca: "",
            quarta: { nome: "Pedro Lucas", disciplina: "Física" },
            quinta: "",
            sexta: { nome: "Fabi", disciplina: "Biologia" }
        },

        { horario: "Intervalo", segunda: "", terca: "", quarta: "", quinta: "", sexta: "" },

        {
            horario: "14:00",
            segunda: { nome: "Yasmin", disciplina: "Redação" },
            terca: "",
            quarta: { nome: "Pedro Lucas", disciplina: "Matemática" },
            quinta: "",
            sexta: { nome: "Fabi", disciplina: "Biologia" }
        },

        {
            horario: "15:30",
            segunda: { nome: "João Guilherme", disciplina: "Física" },
            terca: "",
            quarta: { nome: "Larissa", disciplina: "Química" },
            quinta: "",
            sexta: { nome: "Coutinho", disciplina: "Humanidades" }
        },
        {
            horario: "16:45",
            segunda: { nome: "Pedro Lucas", disciplina: "Matemática" },
            terca: "",
            quarta: "",
            quinta: "",
            sexta: ""
        },

    ];

    const dataSourceConcurso = [
        { horario: "08:00", segunda: "", terca: "", quarta: "", quinta: "", sexta: "" }
    ];

    const dataSourceTecnicoSabado = [
        {
            horario: "08:00",
            sabadoA: {nome: "Windson", disciplina: "Linguagens"},
            sabadoB: {nome: "Windson", disciplina: "Linguagens"}
        },
        { 
            horario: "08:50", 
            sabadoA: {nome: "Pedro Lucas", disciplina: "Matemática"}, 
            sabadoB: {nome: "Pedro Lucas", disciplina: "Matemática"} 
        },
        { 
            horario: "09:40", 
            sabadoA: {nome: "", disciplina: "Redação"}, 
            sabadoB: {nome: "", disciplina: "Redação"} 
        },
        { 
            horario: "Intervalo", 
            sabadoA: {nome: "", disciplina: ""}, 
            sabadoB: {nome: "", disciplina: ""} 
        },
        { 
            horario: "10:50",
            sabadoA: {nome: "", disciplina: "Química"}, 
            sabadoB: {nome: "João Guilherme", disciplina: "Física"} 
        },
        { 
            horario: "11:40", 
            sabadoA: {nome: "", disciplina: "Biologia"}, 
            sabadoB: {nome: "", disciplina: "Humanidades"} 
        }
    ];

    // Estado para controlar qual DataSource está selecionado
    const [selectedDataSource, setSelectedDataSource] = useState(dataSourceVestibular);
    const [selectedColumn, setSelectedColum] = useState(columns)

    // Função para alterar o DataSource ao selecionar no Select
    const handleChange = (value) => {
        switch (value) {
            case "vestibular":
                setSelectedDataSource(dataSourceVestibular);
                setSelectedColum(columns);
                break;
            case "tecnico":
                setSelectedDataSource(dataSourceTecnico);
                setSelectedColum(columns);
                break;
            case "concurso":
                setSelectedDataSource(dataSourceConcurso);
                setSelectedColum(columns);
                break;
            case "tecnicoSabado":
                setSelectedDataSource(dataSourceTecnicoSabado);
                setSelectedColum(columnsSab)
                break;
            default:
                setSelectedDataSource(dataSourceVestibular);
                setSelectedColum(columns);
        }
    };


    return (
        <div className='container'>
            <div className="table-container">

                <span className='table-filter'>Selecione o horário:</span>
                <Select defaultValue="vestibular" onChange={handleChange} style={{ width: 200, marginBottom: 20 }}>
                    <Option value="vestibular">Vestibular</Option>
                    <Option value="tecnico">Técnico</Option>
                    <Option value="concurso">Concurso</Option>
                    <Option value="tecnicoSabado">Técnico Sábado</Option>
                </Select>

                <Table
                    columns={selectedColumn}
                    dataSource={selectedDataSource}
                    pagination={false}
                    scroll={{ x: 'max-content' }} // Ativa a rolagem horizontal
                    style={{ width: '100%' }} // Garante que a tabela ocupe toda a largura disponível
                    rowClassName={() => 'custom-row-height'}
                />

            </div>
        </div>
    );
}

export default Horarios;
