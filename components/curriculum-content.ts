export type TopicGroup = {
  title: string;
  lead?: string;
  items: string[];
};

export const microeconomicsIntro =
  "Students learned how individuals, businesses, and markets make decisions when resources are limited. The curriculum connected core economic theory directly to entrepreneurship, pricing, competition, and real-world business decisions.";

export const microeconomicsTopics: TopicGroup[] = [
  {
    title: "Supply & Demand",
    items: [
      "How changes in supply and demand affect prices",
      "Understanding shortages and surpluses",
      "Identifying factors that shift supply or demand",
      "Predicting how consumers and businesses respond to market changes",
      "Applying supply-and-demand analysis to real products and industries",
    ],
  },
  {
    title: "Opportunity Cost & Scarcity",
    items: [
      "Understanding scarcity and limited resources",
      "Evaluating trade-offs when making business decisions",
      "Calculating the opportunity cost of choosing one investment, product, or strategy over another",
      "Prioritizing resources such as time, money, labor, and inventory",
    ],
  },
  {
    title: "Consumer Behavior",
    items: [
      "Why consumers choose one product over another",
      "How price, branding, convenience, quality, and substitutes influence purchasing decisions",
      "Understanding willingness to pay",
      "Identifying customer needs and purchasing incentives",
      "Connecting consumer behavior to product development and marketing",
    ],
  },
  {
    title: "Price Elasticity",
    items: [
      "Understanding elastic vs. inelastic demand",
      "Measuring how customers react to price increases or decreases",
      "Determining when a business may be able to raise prices",
      "Evaluating how discounts and promotions affect revenue",
      "Applying elasticity concepts to different industries",
    ],
  },
  {
    title: "Costs, Revenue & Profit",
    items: [
      "Fixed vs. variable costs",
      "Total cost and marginal cost",
      "Revenue and profit calculations",
      "Break-even analysis",
      "Understanding how production volume affects profitability",
      "Evaluating whether a business decision is financially sustainable",
    ],
  },
  {
    title: "Marginal Analysis",
    items: [
      "Understanding marginal cost and marginal benefit",
      "Determining whether producing or selling one additional unit makes sense",
      "Using incremental decision-making in hiring, advertising, inventory, and expansion",
    ],
  },
  {
    title: "Market Structures",
    items: [
      "Perfect competition",
      "Monopolistic competition",
      "Oligopolies",
      "Monopolies",
      "Understanding how the level of competition affects pricing, marketing, innovation, and profitability",
    ],
  },
  {
    title: "Competition & Competitive Advantage",
    items: [
      "Identifying direct and indirect competitors",
      "Understanding substitutes",
      "Comparing businesses based on price, quality, convenience, service, and differentiation",
      "Identifying opportunities to create a competitive advantage",
    ],
  },
  {
    title: "Market Failure & Externalities",
    items: [
      "Positive and negative externalities",
      "Public goods",
      "Information asymmetry",
      "Understanding situations where markets may not produce efficient outcomes",
      "Examining the role of government regulation and incentives",
    ],
  },
  {
    title: "Applied Economic Decision-Making",
    lead: "Students applied economic concepts to practical questions such as:",
    items: [
      "What should a company charge for its product?",
      "How many units must it sell to become profitable?",
      "How will competitors react?",
      "What happens if production costs increase?",
      "Should a company lower prices to increase demand?",
      "Is the target customer willing and able to pay?",
      "What market conditions make a business opportunity attractive?",
    ],
  },
];

export const businessIntro =
  "Students learned how to take an idea and develop it into a structured, financially viable business. The curriculum focused on understanding customers, creating value, generating revenue, managing costs, and building businesses that can grow.";

export const businessTopics: TopicGroup[] = [
  {
    title: "Problem Identification",
    items: [
      "Identifying meaningful customer problems",
      "Distinguishing between a product idea and an actual market need",
      "Evaluating the frequency and severity of a problem",
      "Determining whether customers are motivated to pay for a solution",
    ],
  },
  {
    title: "Customer Segmentation",
    items: [
      "Identifying a target customer",
      "Creating customer profiles",
      "Understanding demographics, behaviors, needs, and purchasing habits",
      "Distinguishing between users, customers, and decision-makers",
      "Selecting an initial target market",
    ],
  },
  {
    title: "Value Proposition",
    items: [
      "Defining why a customer should choose one business over another",
      "Connecting customer problems to specific solutions",
      "Developing clear value propositions",
      "Identifying differentiators and competitive advantages",
    ],
  },
  {
    title: "Business Model Development",
    lead: "Students explored the major components of a business model, including:",
    items: [
      "Customer segments",
      "Value propositions",
      "Distribution channels",
      "Customer relationships",
      "Revenue streams",
      "Key resources",
      "Key activities",
      "Key partners",
      "Cost structure",
    ],
  },
  {
    title: "Revenue Models",
    lead: "Students compared different ways companies make money, including:",
    items: [
      "Direct sales",
      "Subscriptions",
      "Freemium models",
      "Advertising",
      "Licensing",
      "Commission-based models",
      "Marketplace fees",
      "Service-based revenue",
      "Memberships",
      "Franchise models",
      "Usage-based pricing",
    ],
  },
  {
    title: "Pricing Strategy",
    items: [
      "Cost-based pricing",
      "Competitive pricing",
      "Value-based pricing",
      "Penetration pricing",
      "Premium pricing",
      "Understanding customer willingness to pay",
      "Testing different price points",
      "Connecting pricing decisions to demand and profitability",
    ],
  },
  {
    title: "Unit Economics",
    items: [
      "Revenue per customer",
      "Cost per customer",
      "Gross margin",
      "Customer acquisition cost",
      "Customer lifetime value",
      "Contribution margin",
      "Understanding whether a business can profitably acquire and serve customers",
    ],
  },
  {
    title: "Market Research",
    items: [
      "Conducting customer interviews",
      "Creating surveys",
      "Researching competitors",
      "Estimating market demand",
      "Identifying industry trends",
      "Using customer feedback to refine a business idea",
    ],
  },
  {
    title: "Market Sizing",
    items: [
      "Total Addressable Market (TAM)",
      "Serviceable Available Market (SAM)",
      "Serviceable Obtainable Market (SOM)",
      "Estimating the realistic size of a business opportunity",
    ],
  },
  {
    title: "Competitive Analysis",
    items: [
      "Identifying direct and indirect competitors",
      "Comparing pricing, features, branding, and customer experience",
      "Conducting SWOT analyses",
      "Identifying gaps in the market",
      "Developing differentiation strategies",
    ],
  },
  {
    title: "Minimum Viable Product (MVP)",
    items: [
      "Developing the simplest version of a product that can test an idea",
      "Testing assumptions before making major investments",
      "Gathering customer feedback",
      "Iterating based on evidence rather than assumptions",
    ],
  },
  {
    title: "Go-to-Market Strategy",
    items: [
      "Determining how a company will reach customers",
      "Selecting marketing and sales channels",
      "Social media and digital marketing",
      "Partnerships",
      "Direct sales",
      "Referral strategies",
      "Customer acquisition planning",
    ],
  },
  {
    title: "Business Financials",
    items: [
      "Startup costs",
      "Operating expenses",
      "Revenue projections",
      "Profit margins",
      "Break-even calculations",
      "Cash flow",
      "Basic financial forecasting",
      "Evaluating whether a business model is financially viable",
    ],
  },
  {
    title: "Scaling a Business",
    items: [
      "Identifying when a business is ready to grow",
      "Hiring and delegation",
      "Standardizing operations",
      "Expanding into new markets",
      "Increasing customer acquisition",
      "Understanding economies of scale",
      "Evaluating the risks associated with rapid growth",
    ],
  },
  {
    title: "Pitching & Communication",
    lead: "Students learned how to communicate a business idea through:",
    items: [
      "Elevator pitches",
      "Business presentations",
      "Customer problem statements",
      "Market opportunity analysis",
      "Business model explanations",
      "Financial projections",
      "Competitive positioning",
      "Investor-style pitch presentations",
    ],
  },
];

export const appliedProjectsLead =
  "Rather than learning entrepreneurship only through lectures, students applied these concepts by developing their own business ideas. Projects could include:";

export const appliedProjects: string[] = [
  "Identifying a real-world problem",
  "Researching a target market",
  "Interviewing potential customers",
  "Analyzing competitors",
  "Creating a value proposition",
  "Designing a business model",
  "Developing pricing and revenue strategies",
  "Calculating startup costs and break-even points",
  "Building an MVP or prototype",
  "Creating a go-to-market strategy",
  "Presenting the final business through an investor-style pitch",
];

export const businessClosing =
  "The goal was to help students understand not only how businesses operate, but how economic reasoning can be used to identify opportunities, evaluate ideas, make decisions, and build viable ventures.";
