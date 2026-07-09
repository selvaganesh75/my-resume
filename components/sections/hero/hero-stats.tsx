const stats = [
    {
        value: "12+",
        label: "Years Experience",
    },
    {
        value: "50+",
        label: "Projects"
    },
    {
        value: "10+",
        label: "Technologies",
    },
    {
        value: "100%",
        label: "Commitment"
    }
]

export function HeroStats() {
    return <div className="grid grid-cols-2 gap-5">
        {stats.map((stat) => {
            return <div key={stat.value} className="glass rounded-3xl p-6 text-center">
                <h2 className="text-4xl font-bold gradient-text">
                    {stat.value}
                </h2>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
        })}
    </div>
}