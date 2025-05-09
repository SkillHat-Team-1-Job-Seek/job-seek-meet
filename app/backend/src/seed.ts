import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

// async function main() {
//   // Malik's user ID to connect with
//   const malikId = "048d31aa-ebe4-4110-80dc-6e061a7a88ac";

//   // First, create all the tags we'll need
//   const tags = [
//     // Malik's existing tags
//     "SQL",
//     "Data Analysis & Reporting",
//     "Requirement Gathering",
//     "Excel",
//     "Power BI",
//     "Agile & Scrum Practices",
//     "Stakeholder Communication",
//     "Startup ecosystems",
//     "business strategy sessions",
//     "professional networking events",
//     "data storytelling & visualization",

//     "Python",
//     "R",
//     "Machine Learning",
//     "Tableau",
//     "Data Science",
//     "Project Management",
//     "JIRA",
//     "Confluence",
//     "UX Research",
//     "Product Management",
//     "Scrum Master",
//     "DevOps",
//     "AWS",
//     "Azure",
//     "Google Cloud",
//     "Financial Analysis",
//     "Marketing",
//     "SEO",
//     "Content Strategy",
//     "UI Design",
//     "Frontend Development",
//   ];

//   // Create tag records if they don't exist
//   for (const tagName of tags) {
//     await prisma.tag.upsert({
//       where: { name: tagName },
//       update: {},
//       create: {
//         id: uuidv4(),
//         name: tagName,
//         createdAt: new Date(),
//       },
//     });
//   }

//   // User seed data - professionals that would connect with a Business Analyst
//   const users = [
//     {
//       name: "Sarah Chen",
//       email: "sarah.chen@example.com",
//       password: await hash("Password123", 10),
//       profession: "Data Scientist",
//       location: "Toronto, Canada",
//       age: 29,
//       bio: "Data scientist specializing in predictive analytics and machine learning with a focus on business intelligence solutions. Working to bridge the gap between data and business strategy.",
//       profileImageUrl: "https://randomuser.me/api/portraits/women/32.jpg",
//       industry: "Technology",
//       isVerified: "true",
//       isProfileComplete: "true",
//       showAge: true,
//       showProfile: true,
//       tags: [
//         "Python",
//         "R",
//         "Machine Learning",
//         "Data Analysis & Reporting",
//         "SQL",
//       ],
//     },
//     {
//       name: "Renae R",
//       email: "renae.r@example.com",
//       password: await hash("Password123", 10),
//       profession: "Bussiness Analyst",
//       location: "Toronto, Canada",
//       age: 29,
//       bio: "Detail-oriented Business Analyst with 3+ years of experience in interpreting data, defining business requirements, and supporting cross-functional teams to deliver impactful digital solutions.",
//       profileImageUrl: "https://randomuser.me/api/portraits/women/32.jpg",
//       industry: "Technology",
//       isVerified: "true",
//       isProfileComplete: "true",
//       showAge: true,
//       showProfile: true,
//       tags: [
//         "SQL",
//         "Data Analysis & Reporting",
//         "Requirement Gathering",
//         "Excel",
//         "Power BI",
//         "Agile & Scrum Practices",
//         "Stakeholder Communication",
//         "Startup ecosystems",
//         "business strategy sessions",
//         "professional networking events",
//         "data storytelling & visualization",
//       ],
//     },
//     {
//       name: "Patrick King",
//       email: "p.patrick@example.com",
//       password: await hash("Password123", 10),
//       profession: "Product Manager",
//       location: "Lagos, Nigeria",
//       age: 34,
//       bio: "Experienced product manager connecting technical teams with business objectives. Strong focus on data-driven decision making and agile methodologies.",
//       profileImageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
//       industry: "Technology",
//       isVerified: "true",
//       isProfileComplete: "true",
//       showAge: false,
//       showProfile: true,
//       tags: [
//         "Product Management",
//         "Agile & Scrum Practices",
//         "Stakeholder Communication",
//         "JIRA",
//         "business strategy sessions",
//       ],
//     },
//     {
//       name: "Aisha Patel",
//       email: "aisha.p@example.com",
//       password: await hash("Password123", 10),
//       profession: "UX Researcher",
//       location: "Mississauga, Canada",
//       age: 27,
//       bio: "UX researcher focused on creating data-informed user experiences. Collaborates closely with analysts and product teams to translate insights into product improvements.",
//       profileImageUrl: "https://randomuser.me/api/portraits/women/67.jpg",
//       industry: "Technology",
//       isVerified: "true",
//       isProfileComplete: "true",
//       showAge: true,
//       showProfile: true,
//       tags: [
//         "UX Research",
//         "Requirement Gathering",
//         "Stakeholder Communication",
//         "data storytelling & visualization",
//       ],
//     },
//     {
//       name: "David Kwong",
//       email: "david.k@example.com",
//       password: await hash("Password123", 10),
//       profession: "Scrum Master",
//       location: "Toronto, Canada",
//       age: 31,
//       bio: "Certified Scrum Master helping teams deliver value through agile practices. Expert in removing impediments and fostering continuous improvement.",
//       profileImageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
//       industry: "Technology",
//       isVerified: "true",
//       isProfileComplete: "true",
//       showAge: true,
//       showProfile: true,
//       tags: [
//         "Scrum Master",
//         "Agile & Scrum Practices",
//         "JIRA",
//         "Confluence",
//         "Stakeholder Communication",
//       ],
//     },
//     {
//       name: "Olivia Johnson",
//       email: "olivia.j@example.com",
//       password: await hash("Password123", 10),
//       profession: "Financial Analyst",
//       location: "Toronto, Canada",
//       age: 28,
//       bio: "Financial analyst with a strong background in data modeling and business intelligence. Experienced in translating complex financial data into actionable insights.",
//       profileImageUrl: "https://randomuser.me/api/portraits/women/28.jpg",
//       industry: "Finance",
//       isVerified: "true",
//       isProfileComplete: "true",
//       showAge: false,
//       showProfile: true,
//       tags: [
//         "Financial Analysis",
//         "Excel",
//         "Power BI",
//         "SQL",
//         "data storytelling & visualization",
//         "Agile & Scrum Practices",
//         "Stakeholder Communication",
//         "Startup ecosystems",
//         "business strategy sessions",
//         "professional networking events",
//       ],
//     },
//     {
//       name: "Hassan Ahmed",
//       email: "hassan.a@example.com",
//       password: await hash("Password123", 10),
//       profession: "Project Manager",
//       location: "Ottawa, Canada",
//       age: 36,
//       bio: "Technology project manager with 8+ years of experience delivering complex digital transformation initiatives. Adept at stakeholder management and cross-functional team leadership.",
//       profileImageUrl: "https://randomuser.me/api/portraits/men/55.jpg",
//       industry: "Technology",
//       isVerified: "true",
//       isProfileComplete: "true",
//       showAge: true,
//       showProfile: true,
//       tags: [
//         "Project Management",
//         "Agile & Scrum Practices",
//         "Stakeholder Communication",
//         "JIRA",
//         "professional networking events",
//       ],
//     },
//     {
//       name: "Emma Wilson",
//       email: "emma.w@example.com",
//       password: await hash("Password123", 10),
//       profession: "Marketing Manager",
//       location: "Vancouver, Canada",
//       age: 32,
//       bio: "Digital marketing manager passionate about data-driven campaigns. Works closely with analytics teams to optimize marketing strategies and measure ROI.",
//       profileImageUrl: "https://randomuser.me/api/portraits/women/15.jpg",
//       industry: "Marketing",
//       isVerified: "true",
//       isProfileComplete: "true",
//       showAge: true,
//       showProfile: true,
//       tags: [
//         "Marketing",
//         "Data Analysis & Reporting",
//         "Content Strategy",
//         "SEO",
//         "business strategy sessions",
//       ],
//     },
//     {
//       name: "Raj Patel",
//       email: "raj.p@example.com",
//       password: await hash("Password123", 10),
//       profession: "Solutions Architect",
//       location: "Toronto, Canada",
//       age: 38,
//       bio: "Enterprise solutions architect specializing in data-driven systems. Expert in designing scalable architectures that support business analytics and intelligence needs.",
//       profileImageUrl: "https://randomuser.me/api/portraits/men/11.jpg",
//       industry: "Technology",
//       isVerified: "true",
//       isProfileComplete: "true",
//       showAge: false,
//       showProfile: true,
//       tags: ["AWS", "Azure", "DevOps", "SQL", "Data Analysis & Reporting"],
//     },
//     {
//       name: "Sofia Garcia",
//       email: "sofia.g@example.com",
//       password: await hash("Password123", 10),
//       profession: "UI/UX Designer",
//       location: "Montreal, Canada",
//       age: 26,
//       bio: "Creative UI/UX designer who transforms data insights into intuitive user experiences. Passionate about creating designs that balance business requirements with user needs.",
//       profileImageUrl: "https://randomuser.me/api/portraits/women/75.jpg",
//       industry: "Creative",
//       isVerified: "true",
//       isProfileComplete: "true",
//       showAge: true,
//       showProfile: true,
//       tags: [
//         "UI Design",
//         "UX Research",
//         "Requirement Gathering",
//         "Stakeholder Communication",
//       ],
//     },
//     {
//       name: "James Wilson",
//       email: "james.w@example.com",
//       password: await hash("Password123", 10),
//       profession: "Frontend Developer",
//       location: "Toronto, Canada",
//       age: 30,
//       bio: "Frontend developer specializing in data visualization and dashboard creation. Works closely with analysts to create intuitive interfaces for complex data.",
//       profileImageUrl: "https://randomuser.me/api/portraits/men/33.jpg",
//       industry: "Technology",
//       isVerified: "true",
//       isProfileComplete: "true",
//       showAge: true,
//       showProfile: true,
//       tags: [
//         "Frontend Development",
//         "data storytelling & visualization",
//         "UI Design",
//       ],
//     },
//   ];

//   // Create each user
//   for (const userData of users) {
//     const { tags: userTags, ...userDataWithoutTags } = userData;

//     // Create the user
//     const user = await prisma.user.create({
//       data: {
//         id: uuidv4(),
//         ...userDataWithoutTags,
//         registrationDate: new Date(),
//       },
//     });

//     // Connect the user to their tags
//     if (userTags.length > 0) {
//       await prisma.user.update({
//         where: { id: user.id },
//         data: {
//           tags: {
//             connectOrCreate: userTags.map((tagName) => ({
//               where: { name: tagName },
//               create: {
//                 id: uuidv4(),
//                 name: tagName,
//                 createdAt: new Date(),
//               },
//             })),
//           },
//         },
//       });
//     }
//     await prisma.connection.create({
//       data: {
//         userId1: malikId,
//         userId2: user.id,
//         status: Math.random() > 0.3 ? "ACCEPTED" : "PENDING", // 70% accepted, 30% pending
//       },
//     });
//   }

//   console.log("Seed data created successfully!");
// }
async function main() {
  const malikId = "048d31aa-ebe4-4110-80dc-6e061a7a88ac";

  // Multiple group categories - Analyst, Creative, and Tech groups
  const groupsByCategory = {
    analyst: [
      {
        name: "Business Analysts Daily",
        description:
          "A professional network for BAs. Share job opportunities, discuss industry trends, and connect with peers.",
        groupImageUrl:
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000",
        isAdmin: true,
        forProfessions: [
          "Business Analyst",
          "Data Analyst",
          "Financial Analyst",
        ],
      },
      {
        name: "FinTech Innovators",
        description:
          "Exploring the intersection of finance and technology. For professionals working on digital transformation in financial services.",
        groupImageUrl:
          "https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?q=80&w=1000",
        isAdmin: false,
        forProfessions: [
          "Business Analyst",
          "Financial Analyst",
          "Product Manager",
        ],
      },
      {
        name: "Data Visualization Experts",
        description:
          "For professionals who turn complex financial data into clear visual insights. Share techniques, tools, and best practices.",
        groupImageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
        isAdmin: false,
        forProfessions: ["Data Scientist", "Business Analyst", "Data Analyst"],
      },
    ],
    creative: [
      {
        name: "UI/UX Design Community",
        description:
          "Connect with designers focused on creating beautiful, intuitive interfaces. Share portfolios, give feedback, discuss trends.",
        groupImageUrl:
          "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000",
        isAdmin: false,
        forProfessions: ["UI/UX Designer", "Frontend Developer"],
      },
      {
        name: "Creative Professionals Network",
        description:
          "For designers, artists, and creative professionals to collaborate and share inspiration.",
        groupImageUrl:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000",
        isAdmin: false,
        forProfessions: ["UI/UX Designer", "Frontend Developer"],
      },
    ],
    tech: [
      {
        name: "Data Science Collective",
        description:
          "A community for data scientists to discuss algorithms, machine learning techniques, and industry applications.",
        groupImageUrl:
          "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1000",
        isAdmin: false,
        forProfessions: ["Data Scientist", "Business Analyst"],
      },
      {
        name: "Product Management Hub",
        description:
          "For product managers to share strategies, discuss challenges, and network with peers.",
        groupImageUrl:
          "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000",
        isAdmin: false,
        forProfessions: ["Product Manager"],
      },
    ],
  };

  // Flatten the groups for creation
  const allGroups = [
    ...groupsByCategory.analyst,
    ...groupsByCategory.creative,
    ...groupsByCategory.tech,
  ];

  // Create the groups and add Malik as a member of analyst groups
  for (const groupData of allGroups) {
    const { isAdmin, forProfessions, ...groupInfo } = groupData;

    const group = await prisma.group.create({
      data: {
        id: uuidv4(),
        ...groupInfo,
        createdAt: new Date(),
      },
    });

    // Only add Malik to analyst-focused groups
    if (forProfessions.includes("Business Analyst")) {
      await prisma.groupMembership.create({
        data: {
          userId: malikId,
          groupId: group.id,
          isAdmin: isAdmin,
        },
      });
      console.log(
        `Added Malik to ${group.name} as ${isAdmin ? "admin" : "member"}`
      );
    }
  }

  // Get all users except Malik
  const users = await prisma.user.findMany({
    where: {
      id: {
        not: malikId,
      },
    },
  });

  // Get all the groups we created
  const groups = await prisma.group.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: allGroups.length,
  });

  // Add users to appropriate groups based on profession
  for (const user of users) {
    // Find groups suitable for this user's profession
    const suitableGroups = allGroups.filter(
      (group) =>
        user?.profession && group.forProfessions.includes(user.profession)
    );

    if (suitableGroups.length === 0) {
      // If no exact profession match, add them to 1-2 random groups
      const randomGroups = [...groups]
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);

      for (const randomGroup of randomGroups) {
        try {
          await prisma.groupMembership.create({
            data: {
              userId: user.id,
              groupId: randomGroup.id,
              isAdmin: false,
            },
          });
          console.log(
            `Added ${user.name} (${user.profession}) to ${randomGroup.name} (random match)`
          );
        } catch (error) {
          console.log(
            `User ${user.name} is already a member of ${randomGroup.name}`
          );
        }
      }
    } else {
      // Add user to profession-matched groups
      for (const matchedGroup of suitableGroups) {
        const group = groups.find((g) => g.name === matchedGroup.name);
        if (group) {
          try {
            await prisma.groupMembership.create({
              data: {
                userId: user.id,
                groupId: group.id,
                isAdmin: false,
              },
            });
            console.log(
              `Added ${user.name} (${user.profession}) to ${group.name} (profession match)`
            );
          } catch (error) {
            console.log(
              `User ${user.name} is already a member of ${group.name}`
            );
          }
        }
      }
    }
  }

  console.log("Groups created successfully with profession-based membership!");
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
