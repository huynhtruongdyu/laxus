type SkillCardProps = {
    name: string
}
const SkillCard = ({
                       name
                   }: SkillCardProps) => {
    return <span>{name}</span>;
}

export default SkillCard;