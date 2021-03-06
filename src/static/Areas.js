export const TOTAL_AREAS_NUMBER = 83
export const AREAS = [
    {
        id: 0,
        name: 'Exterior',
        parts: [
            {id: 0, name: 'Left Headlights', isChecked: false},
            {id: 1, name: 'Right Headlights', isChecked: false},
            {id: 2, name: 'Front Bumper Left', isChecked: false},
            {id: 3, name: 'Front Bumper Right', isChecked: false},
            {id: 4, name: 'Left Mirror', isChecked: false},
            {id: 5, name: 'Front Left Door', isChecked: false},
            {id: 6, name: 'Rear Left Door', isChecked: false},
            {id: 7, name: 'Front Left Fender', isChecked: false},
            {id: 8, name: 'Rear Left Fender', isChecked: false},
            {id: 9, name: 'Body Cill Right Front', isChecked: false},
            {id: 10, name: 'Body Cill Right Rear', isChecked: false},
            {id: 11, name: 'Right Mirror', isChecked: false},
            {id: 12, name: 'Hood', isChecked: false},
            {id: 13, name: 'Roof', isChecked: false},
            {id: 14, name: 'Left Taillights', isChecked: false},
            {id: 15, name: 'Right Taillights', isChecked: false},
            {id: 16, name: 'Rear Bumper Left', isChecked: false},
            {id: 17, name: 'Rear Bumper Right', isChecked: false},
            {id: 18, name: 'Wheel Left Front', isChecked: false},
            {id: 19, name: 'Wheel Left Rear', isChecked: false},
            {id: 20, name: 'Wheel Right Front', isChecked: false},
            {id: 21, name: 'Wheel Right Rear', isChecked: false},
            {id: 22, name: 'Left Front Fog Light', isChecked: false},
            {id: 23, name: 'Right Front Fog Light', isChecked: false},
            {id: 24, name: 'Radiator Grille Front', isChecked: false},
            {id: 25, name: 'A Pillar Left', isChecked: false},
            {id: 26, name: 'B Pillar Left', isChecked: false},
            {id: 27, name: 'C Pillar Left', isChecked: false},
            {id: 28, name: 'A Pillar Right', isChecked: false},
            {id: 29, name: 'B Pillar Right', isChecked: false},
            {id: 30, name: 'C Pillar Right', isChecked: false},
            {id: 31, name: 'Trunk', isChecked: false},
            {id: 32, name: 'Trunk Left', isChecked: false},
            {id: 33, name: 'Trunk Right', isChecked: false},
            {id: 34, name: 'Quarter Panel Left Rear', isChecked: false},
            {id: 35, name: 'Quarter Panel Right Rear', isChecked: false},
            {id: 36, name: 'Rear Right Panel', isChecked: false},
            {id: 37, name: 'Rear Left Panel', isChecked: false},
            {id: 38, name: 'Wiper Front', isChecked: false},
            {id: 39, name: 'Wiper Back', isChecked: false}
        ],
        route: 'exterior',
        header: 'Inbound Check',
        screenTitle: 'Exterior Check',
        screenDescription: 'Please report any damage on the outside of the car.',
        isChecked: false
    },
    {
        id: 1,
        name: 'Interior',
        parts: [
            {id: 0, name: 'Cigarette Lighter', isChecked: false},
            {id: 1, name: 'Entrance Step Right', isChecked: false},
            {id: 2, name: 'Interior Left', isChecked: false},
            {id: 3, name: 'Interior Right', isChecked: false},
            {id: 4, name: 'Seat Front Right', isChecked: false},
            {id: 5, name: 'Seat Front Left', isChecked: false},
            {id: 6, name: 'Inside Mirror', isChecked: false},
            {id: 7, name: 'Floor Mats', isChecked: false},
            {id: 8, name: 'Onboard Tools', isChecked: false},
            {id: 9, name: 'Tire Repair Kit', isChecked: false},
            {id: 10, name: 'Security Belt', isChecked: false},
        ],
        isChecked: false,
        route: 'interior',
        header: 'Inbound Check',
        screenTitle: 'Interior Check',
        screenDescription: 'Please report any damage on the inside of the car.'
    },
    {
        id: 2,
        name: 'Windows',
        parts: [
            {id: 0, name: 'Front Left Window', isChecked: false},
            {id: 1, name: 'Front Right Window', isChecked: false},
            {id: 2, name: 'Rear Right Window', isChecked: false},
            {id: 3, name: 'Rear Left Window', isChecked: false},
            {id: 4, name: 'Rear Window', isChecked: false},
            {id: 5, name: 'Front Windshield', isChecked: false}
        ],
        isChecked: false,
        route: 'windows',
        header: 'Inbound Check',
        screenTitle: 'Windows Check',
        screenDescription: 'Please report any damage on the windows of the car.'
    },
    {
        id: 3,
        name: 'Tires',
        parts: [
            {id: 0, name: 'Tire Front Right', isChecked: false},
            {id: 1, name: 'Tire Front Left', isChecked: false},
            {id: 2, name: 'Tire Rear Right', isChecked: false},
            {id: 3, name: 'Tire Rear Left', isChecked: false},
            {id: 4, name: 'Tire Pressure Valve', isChecked: false}
        ],
        isChecked: false,
        route: 'tires',
        header: 'Inbound Check',
        screenTitle: 'Tires Check',
        screenDescription: 'Please report any damage on the tires of the car.'
    },
    {
        id: 4,
        name: 'Technical Defect',
        parts: [
            {id: 0, name: 'Red Brake System', isChecked: false},
            {id: 1, name: 'Red Battery', isChecked: false},
            {id: 2, name: 'Red Oil Level', isChecked: false},
            {id: 3, name: 'Red Coolant Temperature', isChecked: false},
            {id: 4, name: 'Red Airbags', isChecked: false},
            {id: 5, name: 'Yellow Brake Wear', isChecked: false},
            {id: 6, name: 'Yellow Engine Control', isChecked: false},
            {id: 7, name: 'Yellow Tire Pressure', isChecked: false},
            {id: 8, name: 'Yellow ABS', isChecked: false},
            {id: 9, name: 'Fuel Display', isChecked: false},
            {id: 10, name: 'Exhaust System', isChecked: false},
            {id: 11, name: 'Electric Door Locking System', isChecked: false},
            {id: 12, name: 'Driver Assistence System', isChecked: false},
            {id: 13, name: 'Cruise Control', isChecked: false},
            {id: 14, name: 'Multi Media System', isChecked: false},
            {id: 15, name: 'Navigation System', isChecked: false},
            {id: 16, name: 'Heating', isChecked: false},
            {id: 17, name: 'Air Conditioning', isChecked: false},
            {id: 18, name: 'Cigarette lighter', isChecked: false},
            {id: 19, name: 'Gearbox', isChecked: false},
            {id: 20, name: 'Engine', isChecked: false},
            {id: 21, name: 'High Voltage Battery', isChecked: false}
        ],
        isChecked: false,
        route: 'technical-defect',
        header: 'Inbound Check',
        screenTitle: 'Technical Check',
        screenDescription: 'Please report any specific technical defect.'
    },
    {
        id: 5,
        name: 'Spare Parts / Loss / Defect',
        parts: [
            {id: 0, name: 'Warn Triangle', isChecked: false},
            {id: 1, name: 'Welcome Packages', isChecked: false},
            {id: 2, name: 'Onboard Tools', isChecked: false},
            {id: 3, name: 'Tire Repair Kit', isChecked: false},
            {id: 4, name: 'Ignition Key', isChecked: false}
        ],
        isChecked: false,
        route: 'spare-parts',
        header: 'Inbound Check',
        screenTitle: 'Spare Parts Check',
        screenDescription: 'Please check if all spare parts are there.'
    },
];