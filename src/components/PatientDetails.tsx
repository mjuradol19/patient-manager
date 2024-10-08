import { toast } from "react-toastify"
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { usePatientStore } from "../store/store"

type PatientDetailsProps = {
    patient: Patient
}


export default function PatientDetails({ patient }: PatientDetailsProps){

    const deletePatient = usePatientStore((state) => state.deletePatient)
    const getPatientById = usePatientStore((state) => state.getPatientById)

    const handleClick = () => {
        deletePatient(patient.id)
        toast.error("Paciente Eliminado Correctamente")
    }


  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientDetailItem 
            label="ID"
            data={patient.id}
        />
        <PatientDetailItem 
            label="Nombre"
            data={patient.name}
        />
        <PatientDetailItem 
            label="Propietario"
            data={patient.caretaker}
        />
        <PatientDetailItem 
            label="Email"
            data={patient.email}
        />
        <PatientDetailItem 
            label="Fecha Alta"
            data={patient.date.toString()}
        />
        <PatientDetailItem 
            label="Sintomas"
            data={patient.symptoms}
        />

        <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
            <button 
                type="button"
                onClick={() => getPatientById(patient.id)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg uppercase py-2 px-10">Editar
            </button>
            <button 
                type="button"
                onClick={handleClick}
                className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg uppercase py-2 px-10">Eliminar
            </button>
        </div>
    </div>
  )
}
