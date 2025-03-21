import { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function CalForm() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"cita-previa"});
		cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#e5aff4"},"dark":{"cal-brand":"#e985e3"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return (
		<>
			{/* <button
			  className="bg-primary text-white hover:bg-gray-950 font-semibold py-2 px-4 rounded shadow hover:bg-primary-dark hover:shadow-md transition duration-200"
			  onClick={() => alert("Por ahora la funcionalidad no está activa.")}
			  data-cal-namespace="cita-previa"
			  data-cal-link="alex-garcia-cb8w5j/cita-previa"
			  data-cal-config='{"layout":"month_view","theme":"light"}'
			>
			  Haz Click Aquí para reservar
			</button> */}
			<button 
				onClick={() => alert("Función aún no disponible")}
				className="bg-primary text-white hover:bg-primary-dark font-semibold py-2 px-4 rounded shadow hover:shadow-md transition duration-200"
			>
				Reserva Cita para Llamada gratuita
			</button>
		</>
	);
  };
