export const AREAS = [
    {
        id: 0,
        name: 'Exterior',
        parts: [
            {id: 0, name: 'Left Headlights'},
            {id: 1, name: 'Right Headlights'},
            {id: 2, name: 'Front Bumper Left'},
            {id: 3, name: 'Front Bumper Right'},
            {id: 4, name: 'Left Mirror'},
            {id: 5, name: 'Front Left Door'},
            {id: 6, name: 'Rear Left Door'},
            {id: 7, name: 'Front Left Fender'},
            {id: 8, name: 'Rear Left Fender'},
            {id: 9, name: 'Body Cill Right Front'},
            {id: 10, name: 'Body Cill Right Rear'},
            {id: 11, name: 'Right Mirror'},
            {id: 12, name: 'Hood'},
            {id: 13, name: 'Roof'},
            {id: 14, name: 'Left Taillights'},
            {id: 15, name: 'Right Taillights'},
            {id: 16, name: 'Rear Bumper Left'},
            {id: 17, name: 'Rear Bumper Right'},
            {id: 18, name: 'Wheel Left Front'},
            {id: 19, name: 'Wheel Left Rear'},
            {id: 20, name: 'Wheel Right Front'},
            {id: 21, name: 'Wheel Right Rear'},
            {id: 22, name: 'Left Front Fog Light'},
            {id: 23, name: 'Right Front Fog Light'},
            {id: 24, name: 'Radiator Grille Front'},
            {id: 25, name: 'A Pillar Left'},
            {id: 26, name: 'B Pillar Left'},
            {id: 27, name: 'C Pillar Left'},
            {id: 28, name: 'A Pillar Right'},
            {id: 29, name: 'B Pillar Right'},
            {id: 30, name: 'C Pillar Right'},
            {id: 31, name: 'Trunk'},
            {id: 32, name: 'Trunk Left'},
            {id: 33, name: 'Trunk Right'},
            {id: 34, name: 'Quarter Panel Left Rear'},
            {id: 35, name: 'Quarter Panel Right Rear'},
            {id: 36, name: 'Rear Right Panel'},
            {id: 37, name: 'Rear Left Panel'},
            {id: 38, name: 'Wiper Front'},
            {id: 39, name: 'Wiper Back'}
        ],
        route: '/exterior',
        header: 'Inbound Check',
        screenTitle: 'Exterior Check',
        screenDescription: 'His audiam deserunt in, eum ubique voluptatibus te. In reque dicta usu. Ne rebum dissentiet eam, vim omnis deseruisse id. Ullum deleniti vituperata at quo, insolens complectitur te eos'
    },
    {
        id: 1,
        name: 'Interior',
        parts: [
            {id: 0, name: 'Cigarette Lighter'},
            {id: 1, name: 'Entrance Step Right'},
            {id: 2, name: 'Interior Left'},
            {id: 3, name: 'Interior Right'},
            {id: 4, name: 'Seat Front Right'},
            {id: 5, name: 'Seat Front Left'},
            {id: 6, name: 'Inside Mirror'},
            {id: 7, name: 'Floor Mats'},
            {id: 8, name: 'Onboard Tools'},
            {id: 9, name: 'Tire Repair Kit'},
            {id: 10, name: 'Security Belt'},
        ],
        route: '/interior',
        header: 'Inbound Check',
        screenTitle: 'Interior Check',
        screenDescription: 'His audiam deserunt in, eum ubique voluptatibus te. In reque dicta usu. Ne rebum dissentiet eam, vim omnis deseruisse id. Ullum deleniti vituperata at quo, insolens complectitur te eos'
    },
    {
        id: 2,
        name: 'Windows',
        parts: [
            {id: 0, name: 'Front Left Window'},
            {id: 1, name: 'Front Right Window'},
            {id: 2, name: 'Rear Right Window'},
            {id: 3, name: 'Rear Left Window'},
            {id: 4, name: 'Rear Window'},
            {id: 5, name: 'Front Windshield'}
        ],
        route: '/windows',
        header: 'Inbound Check',
        screenTitle: 'Windows Check',
        screenDescription: 'His audiam deserunt in, eum ubique voluptatibus te. In reque dicta usu. Ne rebum dissentiet eam, vim omnis deseruisse id. Ullum deleniti vituperata at quo, insolens complectitur te eos'
    },
    {
        id: 3,
        name: 'Tires',
        parts: [
            {id: 0, name: 'Tire Front Right'},
            {id: 1, name: 'Tire Front Left'},
            {id: 2, name: 'Tire Rear Right'},
            {id: 3, name: 'Tire Rear Left'},
            {id: 4, name: 'Tire Pressure Valve'}
        ],
        route: '/tires',
        header: 'Inbound Check',
        screenTitle: 'Tires Check',
        screenDescription: 'His audiam deserunt in, eum ubique voluptatibus te. In reque dicta usu. Ne rebum dissentiet eam, vim omnis deseruisse id. Ullum deleniti vituperata at quo, insolens complectitur te eos'
    },
    {
        id: 4,
        name: 'Technical Defect',
        parts: [
            {id: 0, name: 'Red Brake System'},
            {id: 1, name: 'Red Battery'},
            {id: 2, name: 'Red Oil Level'},
            {id: 3, name: 'Red Coolant Temperature'},
            {id: 4, name: 'Red Airbags'},
            {id: 5, name: 'Yellow Brake Wear'},
            {id: 6, name: 'Yellow Engine Control'},
            {id: 7, name: 'Yellow Tire Pressure'},
            {id: 8, name: 'Yellow ABS'},
            {id: 9, name: 'Fuel Display'},
            {id: 10, name: 'Exhaust System'},
            {id: 11, name: 'Electric Door Locking System'},
            {id: 12, name: 'Driver Assistence System'},
            {id: 13, name: 'Cruise Control'},
            {id: 14, name: 'Multi Media System'},
            {id: 15, name: 'Navigation System'},
            {id: 16, name: 'Heating'},
            {id: 17, name: 'Air Conditioning'},
            {id: 18, name: 'Cigarette lighter'},
            {id: 19, name: 'Gearbox'},
            {id: 20, name: 'Engine'},
            {id: 21, name: 'High Voltage Battery'}
        ],
        route: '/technical-defect',
        header: 'Inbound Check',
        screenTitle: 'Technical Check',
        screenDescription: 'His audiam deserunt in, eum ubique voluptatibus te. In reque dicta usu. Ne rebum dissentiet eam, vim omnis deseruisse id. Ullum deleniti vituperata at quo, insolens complectitur te eos'
    },
    {
        id: 5,
        name: 'Spare Parts / Loss / Defect',
        parts: [
            {id: 0, name: 'Warn Triangle'},
            {id: 1, name: 'Welcome Packages'},
            {id: 2, name: 'Onboard Tools'},
            {id: 3, name: 'Tire Repair Kit'},
            {id: 4, name: 'Ignition Key'}
        ],
        route: '/spare-parts',
        header: 'Inbound Check',
        screenTitle: 'Spare Parts Check',
        screenDescription: 'His audiam deserunt in, eum ubique voluptatibus te. In reque dicta usu. Ne rebum dissentiet eam, vim omnis deseruisse id. Ullum deleniti vituperata at quo, insolens complectitur te eos'
    },
];