// import assets
import {assets} from '../assets/index'

// Define the NewsArticle type
type NewsArticle = {
    id: number;
    title: string;
    summary: string;
    content: string;
    date: string;
    author: string;
    category: 'education' | 'health' | 'advocacy' | 'infrastructure' | 'events';
    image: typeof assets[number];
    isPlaceholder?: boolean;
}

/**
 * Returns the full list of news articles, including both actual content and placeholders
 */
export function getNewsArticles(): NewsArticle[] {
    return [
        // --- ACTUAL NEWS ARTICLES (5) ---
        {
            id: 1,
            title: "New School Building Opens in Rural Community",
            summary: "Our organization has completed construction of a new primary school in the Rubavu district, providing access to education for over 300 children.",
            content: `
## A Milestone for Rural Education

We are thrilled to announce the successful completion and grand opening of our newest educational facility in the Rubavu district. After 10 months of construction, the school now stands as a beacon of hope for over 300 children who previously had to walk more than 5 kilometers to reach the nearest educational institution.

The new building features:
- 8 modern classrooms with proper lighting and ventilation
- A library stocked with over 2,000 books
- Computer lab with 20 workstations
- Clean water facilities and proper sanitation
- Solar power system for sustainable energy

This project was made possible through the generous support of our donors and partners, including the Global Education Initiative and local community volunteers who contributed over 1,500 hours of labor.

During the opening ceremony, community elder Mama Josephine expressed her gratitude: "This school means our children will have opportunities we never had. Education is the key that will unlock their future."

Our organization remains committed to promoting quality education through infrastructure development, and we plan to build three more schools in underserved communities by the end of next year.

For more information on how you can support our school building initiatives, please visit our donations page or contact our infrastructure program manager.
            `,
            date: "2025-03-15",
            author: "Jean-Paul Mugabo",
            category: "infrastructure",
            image: assets[2]
        },
        {
            id: 2,
            title: "Scholarship Program Expands to Support 150 More Children",
            summary: "Our scholarship initiative has secured funding to provide educational support for an additional 150 vulnerable children across the country.",
            content: `
## Expanding Educational Opportunities

We are delighted to announce a significant expansion of our scholarship program, which will now support an additional 150 vulnerable children throughout the country. This expansion represents a 40% increase in our scholarship capacity and comes at a critical time when many families are facing economic hardships.

The expanded scholarship program will cover:
- Full school fees for primary and secondary education
- Complete sets of school uniforms and supplies
- Monthly mentorship sessions with educational professionals
- After-school tutoring in core subjects
- Nutritional support through daily school meals

This initiative has been made possible through a new partnership with International Education Fund and several corporate sponsors who believe in our mission to empower through education.

Maria Nkusi, our Education Program Director, commented: "Every child deserves access to quality education regardless of their circumstances. These scholarships remove the financial barriers that prevent vulnerable children from realizing their potential."

Among the new scholarship recipients is 12-year-old Emmanuel, who lost both parents last year. "I want to become a doctor," he told us with bright eyes. "Now I can continue my studies and help others in the future."

Applications for the next round of scholarships will open in September 2025. Interested families or guardians can contact our regional offices for eligibility criteria and application procedures.
            `,
            date: "2025-03-10",
            author: "Alice Munyaneza",
            category: "education",
            image: assets[1]
        },
        {
            id: 3,
            title: "Health Campaign Reaches 5,000 Vulnerable Community Members",
            summary: "Our mobile health initiative provided free medical screenings, vaccinations, and health education to 5,000 people in remote areas over the past month.",
            content: `
## Bringing Healthcare to Those in Need

Our recent mobile health campaign has successfully reached over 5,000 vulnerable community members in remote areas who otherwise have limited access to medical care. The month-long initiative brought essential health services directly to 12 villages across the eastern regions.

The campaign delivered:
- Comprehensive health screenings for common conditions
- Childhood vaccinations for preventable diseases
- Prenatal check-ups for expecting mothers
- Distribution of mosquito nets and water purification tablets
- Health education workshops on hygiene and disease prevention

A team of 15 medical professionals volunteered their time, working alongside our permanent health staff to make this initiative possible. The campaign identified 320 cases requiring follow-up care, which are now being addressed through our referral network of partner hospitals.

"Many of these communities are located over 50 kilometers from the nearest health facility," explained Dr. Thomas Habimana, our Health Programs Coordinator. "By bringing these services directly to them, we're not only treating immediate health concerns but potentially preventing more serious conditions."

Community health worker Claudine noted the importance of the educational component: "Teaching proper handwashing techniques and basic nutrition principles will continue to benefit these communities long after our team has left."

Plans are already underway to expand the mobile health initiative to reach an additional 10 communities before the end of the year, with special focus on maternal and child health services.
            `,
            date: "2025-02-28",
            author: "Dr. Thomas Habimana",
            category: "health",
            image: assets[5]
        },
        {
            id: 4,
            title: "Advocacy Effort Leads to New Child Protection Policies",
            summary: "After two years of dedicated advocacy, our organization has helped secure the passage of strengthened child protection legislation at the national level.",
            content: `
## A Victory for Child Rights

We are proud to announce that after two years of persistent advocacy efforts, the government has enacted comprehensive new child protection policies that will strengthen legal safeguards for vulnerable children nationwide. Our organization played a key role in this achievement through research, community mobilization, and direct engagement with policymakers.

The new policies include:
- Improved mechanisms for reporting and investigating child abuse cases
- Increased penalties for perpetrators of child exploitation
- Expanded social services for children experiencing neglect or abuse
- Mandatory child protection training for teachers, health workers, and law enforcement
- Establishment of a national child protection database

The journey to this legislative victory began in 2023 when our research team documented alarming gaps in the existing child protection framework. Working with a coalition of child-focused organizations, we developed policy recommendations and hosted community forums to gather input from children themselves.

"This represents a significant step forward for child rights in our country," said Grace Uwamahoro, our Director of Advocacy. "These policies provide the legal framework needed to ensure all children grow up in safe, nurturing environments."

Our advocacy team will now focus on monitoring the implementation of these policies and training community leaders to serve as local champions for child protection. A series of awareness workshops for families and caregivers will begin next month to educate the public about the new protections and reporting mechanisms.

This achievement demonstrates the power of persistent advocacy to create lasting, systemic change for vulnerable populations.
            `,
            date: "2025-02-15",
            author: "Grace Uwamahoro",
            category: "advocacy",
            image: assets[4]
        },
        {
            id: 5,
            title: "Early Childhood Center Celebrates First Graduation",
            summary: "Thirty children from our flagship Early Childhood Development center have completed the program and are now ready to enter primary school with strong foundations.",
            content: `
## Celebrating Early Learning Success

Our flagship Early Childhood Development (ECD) center celebrated a significant milestone this week as 30 young graduates completed the program and are now prepared to enter primary education. The colorful graduation ceremony, attended by proud parents and community members, marked the culmination of three years of play-based learning and holistic development.

The graduating children demonstrated remarkable progress in:
- Pre-literacy and numeracy skills
- Social-emotional development
- Physical coordination and health habits
- Creative expression through art and music
- Problem-solving and critical thinking

The ceremony included performances by the children, showcasing songs, dances, and stories they had learned during their time at the center. Parents expressed amazement at the confidence and skills their children had developed.

"When my daughter first came to the center, she was shy and wouldn't speak to strangers," shared Mama Claudette, mother of 6-year-old Ange. "Now she stands up and recites poems without fear. I never had such opportunities as a child."

Our ECD program combines nutritious meals, play-based learning, and regular health check-ups to ensure children develop holistically during their crucial early years. The center's approach emphasizes local cultural values while preparing children for success in formal education.

"These children now have solid foundations for lifelong learning," explained Janette Mukamana, our ECD Program Coordinator. "Research shows that quality early childhood education is one of the most effective investments we can make in a child's future success."

Registration for new children aged 3-5 years will open next month, with priority given to the most vulnerable children in the community. Plans are underway to open two additional ECD centers in neighboring districts by the end of the year.
            `,
            date: "2025-01-30",
            author: "Janette Mukamana",
            category: "education",
            image: assets[3]
        },

        // --- PLACEHOLDER ARTICLES (15) ---
        {
            id: 6,
            title: "Upcoming Volunteer Training Program",
            summary: "Learn about our new initiative to train community volunteers in educational support techniques.",
            content: "Coming soon...",
            date: "2025-04-15",
            author: "Team Member",
            category: "education",
            image: assets[1],
            isPlaceholder: true
        },
        {
            id: 7,
            title: "Annual Fundraising Gala Announced",
            summary: "Join us for our biggest fundraising event of the year to support vulnerable children.",
            content: "Coming soon...",
            date: "2025-05-20",
            author: "Team Member",
            category: "events",
            image: assets[0],
            isPlaceholder: true
        },
        {
            id: 8,
            title: "New Partnership with International Health Organization",
            summary: "Exciting collaboration will expand our health services to reach more communities in need.",
            content: "Coming soon...",
            date: "2025-04-10",
            author: "Team Member",
            category: "health",
            image: assets[5],
            isPlaceholder: true
        },
        {
            id: 9,
            title: "Community Library Project Launches",
            summary: "Initiative aims to establish five new community libraries in underserved areas.",
            content: "Coming soon...",
            date: "2025-04-05",
            author: "Team Member",
            category: "infrastructure",
            image: assets[2],
            isPlaceholder: true
        },
        {
            id: 10,
            title: "Children's Rights Workshop Series",
            summary: "Educational workshops will inform communities about protecting and advocating for children's rights.",
            content: "Coming soon...",
            date: "2025-03-28",
            author: "Team Member",
            category: "advocacy",
            image: assets[4],
            isPlaceholder: true
        },
        {
            id: 11,
            title: "Success Stories: Graduates of Our Programs",
            summary: "Former beneficiaries share how our educational support changed their lives and communities.",
            content: "Coming soon...",
            date: "2025-03-25",
            author: "Team Member",
            category: "education",
            image: assets[1],
            isPlaceholder: true
        },
        {
            id: 12,
            title: "Clean Water Initiative Expands",
            summary: "Our efforts to provide clean water facilities reach ten more schools in rural areas.",
            content: "Coming soon...",
            date: "2025-03-20",
            author: "Team Member",
            category: "health",
            image: assets[5],
            isPlaceholder: true
        },
        {
            id: 13,
            title: "Teacher Training Program Results",
            summary: "Impact assessment shows significant improvement in educational quality after our training intervention.",
            content: "Coming soon...",
            date: "2025-03-12",
            author: "Team Member",
            category: "education",
            image: assets[2],
            isPlaceholder: true
        },
        {
            id: 14,
            title: "Mental Health Support for Vulnerable Youth",
            summary: "New counseling program addresses trauma and builds resilience among at-risk children.",
            content: "Coming soon...",
            date: "2025-03-05",
            author: "Team Member",
            category: "health",
            image: assets[3],
            isPlaceholder: true
        },
        {
            id: 15,
            title: "Policy Brief: Improving Social Protection Systems",
            summary: "Our latest research provides recommendations for strengthening safety nets for vulnerable groups.",
            content: "Coming soon...",
            date: "2025-02-25",
            author: "Team Member",
            category: "advocacy",
            image: assets[4],
            isPlaceholder: true
        },
        {
            id: 16,
            title: "Computer Lab Donation Benefits Rural School",
            summary: "Technology partner provides equipment for new computer lab, benefiting 500 students.",
            content: "Coming soon...",
            date: "2025-02-20",
            author: "Team Member",
            category: "infrastructure",
            image: assets[1],
            isPlaceholder: true
        },
        {
            id: 17,
            title: "Nutrition Program Shows Promising Results",
            summary: "Evaluation of school feeding initiative indicates improved attendance and academic performance.",
            content: "Coming soon...",
            date: "2025-02-10",
            author: "Team Member",
            category: "health",
            image: assets[3],
            isPlaceholder: true
        },
        {
            id: 18,
            title: "International Day of the Child Celebration",
            summary: "Our organization hosts community event highlighting achievements and challenges for children.",
            content: "Coming soon...",
            date: "2025-02-05",
            author: "Team Member",
            category: "events",
            image: assets[0],
            isPlaceholder: true
        },
        {
            id: 19,
            title: "Expanding to New Region: Needs Assessment Complete",
            summary: "Preliminary research identifies critical needs for vulnerable children in southern communities.",
            content: "Coming soon...",
            date: "2025-01-25",
            author: "Team Member",
            category: "advocacy",
            image: assets[0],
            isPlaceholder: true
        },
        {
            id: 20,
            title: "Annual Impact Report Released",
            summary: "Comprehensive report details our organization's achievements and challenges over the past year.",
            content: "Coming soon...",
            date: "2025-01-15",
            author: "Team Member",
            category: "events",
            image: assets[2],
            isPlaceholder: true
        }
    ];
}

/**
 * Returns only the news articles with complete content (non-placeholders)
 */
export function getCompleteNewsArticles(): NewsArticle[] {
    return getNewsArticles().filter(article => !article.isPlaceholder);
}

/**
 * Returns news articles filtered by category
 */
export function getNewsByCategory(category: NewsArticle['category']): NewsArticle[] {
    return getNewsArticles().filter(article => article.category === category);
}

/**
 * Returns the most recent news articles, limited to the specified count
 */
export function getRecentNews(count: number = 5): NewsArticle[] {
    return getNewsArticles()
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, count);
}

/**
 * Returns a single news article by its ID
 */
export function getNewsById(id: number): NewsArticle | undefined {
    return getNewsArticles().find(article => article.id === id);
}