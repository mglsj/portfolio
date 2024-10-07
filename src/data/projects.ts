type Project = {
	title: string;
	date: string;
	url: string;
	tags: string[];
	content?: string;
};

const projects: Project[] = [
	{
		title: "QR Earth",
		date: "Jul 2023 - Present",
		url: "https://play.google.com/store/apps/details?id=org.eu.mglsj.qr_earth&hl=en_US",
		tags: ["Flutter", "PlayStore", "Android"],
		content: `
    An app to promote plastic bottle recycling in GEHU Haldwani Campus.
    <br/>
    App is live on Play Store.`,
	},
	{
		title: "MOS 6502 CPU Emulator",
		date: "Feb 2024 - Jun 2024",
		url: "https://github.com/MG-LSJ/6502_emulator_flutter",
		tags: ["Flutter", "Dart", "Emulator"],
		content:
			"An interactive flutter and dart based emulator for MOS 6502 CPU, with code editor and compiler support, memory editor and instruction disassembler.",
	},
	{
		title: "BT-P1C0",
		date: "Sep 2022 - Dec 2023",
		url: "https://github.com/BT-P1C0",
		tags: ["IoT", "Bus Tracker", "Raspberry Pi", "MicroPython"],
		content:
			"BT-P1C0 is an IoT project that aims to track buses in real-time using Raspberry Pi and MicroPython. The project uses GPS and GSM modules to track the location of the bus and send the data to a server for further processing.",
	},
	{
		title: "Map Haldwani",
		date: "Nov 2020 - Jun 2022",
		url: "https://map-haldwani.github.io/MapHaldwani/",
		tags: ["Mapbox", "OpenStreetMap"],
		content:
			"Map Haldwani is an open-source project that aims to create a detailed map of Haldwani, Uttarakhand, India. The project uses Mapbox and OpenStreetMap data to provide accurate and up-to-date information about the city.",
	},
];

export default projects;
