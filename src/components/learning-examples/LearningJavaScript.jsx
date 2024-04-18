const person = {
    name: 'Adel',
    address: {
        line1: "Cleopatra",
        city: "Alexandria"
    },
    profiles: ["Facebook", "Linkedin"],
    printProfiles: () => person.profiles.map(
        profile => console.log(profile)
    )
}

export default function LearningJavaScript() {
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.city}</div>
            <div>{person.profiles[1]}</div>
        </>
    )
}