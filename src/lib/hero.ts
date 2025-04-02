// import assets
import {assets} from '../assets/index'


type HeroContent = {
    slide: number,
    partone: {
        title: string;
        content: string;
    },
    parttwo: {
        title: string;
        content: string[];
    },
    background: typeof assets[number];
}

// content for English
export function getHeroContentEnglish(): HeroContent[] {
    return [
        {
            slide: 1,
            partone: {
                title: "Our Mission",
                content: "To empower and uplift vulnerable individuals by providing education, healthcare, and social advocacy to ensure a dignified and sustainable future."
            },
            parttwo: {
                title: "Core Values",
                content: ["Compassion","Equity","Empowerment","Sustainability"]
            },
            background: assets[0]
        },
        {
            slide: 2,
            partone: {
                title: "Supporting Vulnerable Children Through Education",
                content: "To provide access to quality education for vulnerable children through scholarships, mentorship, and infrastructure, enabling them to break the cycle of poverty and build a brighter future."
            },
            parttwo: {
                title: "Internal and External Sponsorship Programs",
                content: ["Scholarships: Financial aid for school fees, uniforms, and learning materials.","Mentorship: Pairing children with mentors for academic and emotional support.","Partnerships: Collaborating with NGOs, businesses, and donors to expand reach.","Impact: Reducing dropout rates and increasing access to education for orphans and underprivileged children."]
            },
            background: assets[1]
        },
        {
            slide: 3,
            partone: {
                title: "Promoting Quality Education Through Infrastructure",
                content: "To build and improve schools, libraries, and learning spaces, ensuring vulnerable children have safe, modern environments for quality education and growth."
            },
            parttwo: {
                title: "Building Schools and Learning Facilities",
                content: ["Construction: Establishing safe, accessible schools in underserved communities.","Renovations: Upgrading existing schools with proper classrooms, libraries, and sanitation.","Technology Integration: Providing computer labs and digital learning tools.","Teacher Training: Enhancing educators' skills for better learning outcomes."]
            },
            background: assets[2]
        },
        {
            slide: 4,
            partone: {
                title: "Early Childhood Development (ECD) Program",
                content: "To nurture young minds through play-based learning, nutrition, and caregiver training, laying a strong foundation for lifelong success."
            },
            parttwo: {
                title: "Investing in the Foundation of Learning",
                content: ["ECD Centers: Establishing preschools with trained caregivers.","Nutrition Programs: Providing meals to support cognitive development.","Parental Workshops: Educating families on early learning and child care.","Play-Based Learning: Encouraging creativity and social skills in young children."]
            },
            background: assets[3]
        },
        {
            slide: 5,
            partone: {
                title: "Advocating for Social Welfare and Rights",
                content: "To defend and advance the rights of vulnerable groups through legal aid, awareness campaigns, and policy reform for a just society."
            },
            parttwo: {
                title: "Protecting the Vulnerable",
                content: ["Awareness Campaigns: Educating communities on child rights, gender equality, and disability inclusion.","Legal Support: Assisting in cases of abuse, neglect, or discrimination.","Policy Engagement: Working with governments to strengthen social protection laws.","Community Empowerment: Training local leaders to advocate for vulnerable groups."]
            },
            background: assets[4]
        },
        {
            slide: 6,
            partone: {
                title: "Promoting Health Projects",
                content: "To improve community well-being through medical care, disease prevention, and health education for vulnerable populations."
            },
            parttwo: {
                title: "Ensuring Well-being for All",
                content: ["Medical Camps: Free health screenings and treatments in rural areas.","Vaccination Drives: Preventing diseases in children and mothers.","Sanitation Programs: Building clean water sources and toilets in schools.","Mental Health Support: Counseling services for trauma and stress."]
            },
            background: assets[5]
        }
    ]
}

// content for Kinyarwanda
// content for French