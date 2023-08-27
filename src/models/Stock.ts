import { Injectable } from "@angular/core"

export class Stock {
    id: number
    name: string
    price: number
    description?: string
}

@Injectable()
export class StockService {
    constructor() {
        setInterval(() => {
            this.updateStockPrice();
        }, 10000)
    }
    StocksList: Stock[] = [
        {
            id: 1,
            name: "Vianet",
            price: +((Math.random() * 100).toFixed(2)),
            description: "Vianet is dedicated to provide not only the fastest, most reliable and affordable fiber Internet service, but also providing an ecosystem of digital services around it that enhances user experience.Vianet Communication Ltd. is one of the leading Internet & TV service provider in Nepal. Established in 1999."
        },
        {
            id: 2,
            name: "Agritek",
            price: +((Math.random() * 100).toFixed(2)),
            description: "Your business relies on processes that are efficient and consistent. Agritek’s metal manufacturing capabilities allow you to concentrate more on your products and worry less about multiple venders. Our capabilities are vast, including metal forming, stamping, machining, CNC, assembly, custom fabrication, production welding and more. Call us today."
        },
        {
            id: 3,
            name: "Akamai",
            price: +((Math.random() * 100).toFixed(2)),
            description: "Akamai Connected Cloud — our massively distributed edge and cloud platform — makes it easy for businesses to develop and run applications and workloads, while we put experiences closer to users and keep threats farther away. That’s why innovative companies worldwide choose Akamai to build, deliver, and secure their digital experiences."
        },
        {
            id: 4,
            name: "Baidu",
            price: +((Math.random() * 100).toFixed(2)),
            description: "Baidu is one of the very few companies in the world that offers a full AI stack, encompassing an infrastructure consists of AI chips, deep learning framework, core AI capabilities, such as natural language processing, knowledge graph, speech recognition, computer vision and augmented reality, as well as an open AI platform to facilitate wide application and use. We have put our leading AI capabilities into our products and services, as well as innovative use cases."
        },
        {
            id: 5,
            name: "Blinkx",
            price: +((Math.random() * 100).toFixed(2)),
            description: "blinkX, India’s premier fintech ecosystem where technology and data intersect to create financial magic! Our ambitious mission is to provide financial services to 250 million Indians by 2027, by creating intuitive and cutting-edge financial products and services."

        },
        {
            id: 6,
            name: "Blucora",
            price: +((Math.random() * 100).toFixed(2)),
            description: "Avantax, Inc. (NASDAQ: AVTA), formerly Blucora, Inc., delivers tax-focused wealth management solutions for Financial Professionals, tax professionals, and CPA firms, supporting our goal of minimizing clients’ tax burdens through comprehensive tax-focused financial planning. We have two distinct but related models within our business: the independent Financial Professional model and the employee-based model."

        },
        {
            id: 7,
            name: "Boingo",
            price: +((Math.random() * 100).toFixed(2)),
            description: "Boingo fuels today’s connected lifestyle. Our Wi-Fi and cellular networks reach more than a billion people each year – at airports like LAX, JFK, London and Dubai, in stadiums and universities like Soldier Field and the University of Arizona, throughout complexes like the World Trade Center, and on military bases worldwide."

        },
        {
            id: 8,
            name: "Brainybrawn",
            price: +((Math.random() * 100).toFixed(2)),
            description: "GemXX Corporation., formerly Brainybrawn, Inc., is an Ammolite supplier. The Company is a global, vertically integrated mine to market gemstone and jewelry producer that owns and controls each stage of its production, including excavation, processing, jewelry manufacturing and global distribution."

        },
        {
            id: 9,
            name: "Carbonite",
            price: +((Math.random() * 100).toFixed(2)),
            description: "Carbonite is apart of the product portfolio in the OpenText Cybersecurity family. Together, the portfolios focus on enhancing cybersecurity. Acquired by OpenText in December 2019, Carbonite products bring cyber-resilient solutions to each of our customers, from home users to managed service providers and businesses of all sizes."

        },
        {
            id: 10,
            name: "China Finance",
            price: +((Math.random() * 100).toFixed(2)),
            description: "Established in 1999 and going public on October 15, 2004 (NASDAQ: JRJC), China Finance Online Co., Ltd is the only Chinese web-based financial information/service company listed in a major US exchange. China Finance Online Co. Limited is a technology-driven, user-focused market leader in China in providing vertically integrated financial information and services including news, data, analytics, securities investment advisory and brokerage-related services. Through its flagship portal sites, www.jrj.com and www.stockstar.com, the Company offers basic software and information services to individual investors which integrate financial and listed-company data, information and analytics from multiple sources. Leveraging on its robust internet capabilities and registered user base, China Finance Online is developing securities investment advisory and over time wealth management services. Through its subsidiary, Genius, the Company provides financial database and analytics to institutional customers including domestic brokerages and investment firms. Through its subsidiary, Daily Growth, the Company provides securities brokerage services in Hong Kong."

        },
        {
            id: 11,
            name: "ChinaCache",
            price: +((Math.random() * 100).toFixed(2)),
            description: "EdgeNext is an innovative and independent edge cloud service provider with a global footprint, covering 250+ cities and regions, specializing in regional cloud delivery in China, APAC, and MEA. With its integrated edge cloud platform, the Company offers products and services that can combine “network + security + computing” into a single complete solution."

        },
        {
            id: 12,
            name: "ADR",
            price: +((Math.random() * 100).toFixed(2)),
            description: "ADR Group is a group of companies focusing its activities in the production and distribution of automotive components. It was established in 1973 with its first company, CV Auto Diesel Radiators Co. , of which the name ADR originated from."

        },
        {
            id: 13,
            name: "ChitrChatr",
            price: +((Math.random() * 100).toFixed(2)),
            description: "hitrChatr will be a socially oriented internet based Universal Unified Communication Platform. Mission: Get connected throughout Globe with Innovative technology by using a single Communication platform Vision: To succeed as all communication requirements are achieved by using single window, with flexible routing features with low cost calling to PSTN and Landlines. Our unique marketing technology enables to get attract with new customer as most features in services and free subscription."

        },
        {
            id: 14,
            name: "Cnova",
            price: +((Math.random() * 100).toFixed(2)),
            description: " Through our cdiscount.com website in France, we provide our clients with a wide variety of very competitively priced goods, fast and customer-convenient delivery options, practical and innovative payment solutions as well as travel and entertainment services."

        },
        {
            id: 15,
            name: "Cogent",
            price: +((Math.random() * 100).toFixed(2)),
            description: "Our primary service offering consists of Internet access and data transport offered over our award-winning fiber optic, IP data-only network, along with colocation in any of our 56 Internet data centers. ​We service two customer segments: 'corporate' (small businesses to Fortune 100 companies) and 'netcentric' (carriers / service providers and application / content providers, whose businesses rely primarily on Internet access). "

        },
        {
            id: 16,
            name: "Crexendo",
            price: +((Math.random() * 100).toFixed(2)),
            description: "Crexendo Inc., is a full-service cloud communications provider that delivers critical voice and data communication services to small, medium, and small enterprise markets. Crexendo is comprised of industry-leading engineering, sales, marketing, and support professionals that design, sell, service, and support our award-winning, patented technology that enhances business productivity and efficiency at reduced costs."

        },
        {
            id: 17,
            name: "CrowdGather",
            price: +((Math.random() * 100).toFixed(2)),
            description: "CrowdGather provides an interactive and informational social network for members and an advertising network for marketers."

        },
        {
            id: 18,
            name: "EarthLink",
            price: +((Math.random() * 100).toFixed(2)),
            description: "EarthLink is taking the headache out of your internet connection. Whether you need high-speed internet access, secure premium email, web hosting, or security tools, we’ve got you covered. We know great internet — because we helped build it."

        },
        {
            id: 19,
            name: "Eastern",
            price: +((Math.random() * 100).toFixed(2)),

        },
        {
            id: 20,
            name: "ENDEXX",
            price: +((Math.random() * 100).toFixed(2)),
            description: "Endexx proudly presents its key brand, CBD Unlimited™. Since 2014, CBD Unlimited an Endexx subsidiary, has been a premier developer of Hemp-Derived products, each formulated to address key segments of the health and wellness market. Through its subsidiaries and strategic partnerships, Endexx sells high-end CBD oils, topicals, capsules, snacks and beverages. In Animal Sciences, Endexx distributes its brand line PhytoBites™ for dogs and cats. In late 2021, Endexx is launching its highly anticipated Equine product."

        },
        {
            id: 21,
            name: "Envestnet",
            price: +((Math.random() * 100).toFixed(2)),
            description: "An ever-evolving network of data-driven services, products, tools, and technologies designed to enable the Intelligent Financial Life™."

        },
        {
            id: 22,
            name: "Epazz",
            price: +((Math.random() * 100).toFixed(2)),
            description: "Epazz, Inc. is a mission-critical provider of metaverse solutions, blockchain, cryptocurrency apps, and cloud-based business solutions. We provide customized software enterprise solutions to businesses, governments, healthcare providers, and post-secondary institutions. Moreover, our software products include office space management, Bitcoin wallet, and payment system, applicant tracking system, kennel business software solutions, innovative industrial drone technology, among many others. Epazz is developing Metaverse business solutions that enable people to collaborate in real-time through virtual reality and augmented reality. We are upgrading our business solutions, especially DeskFlex room booking software, to integrate into the Metaverse fully. It is possible through integrated Virtual Reality glasses, called Epazz Slims."

        },
        {
            id: 23,
            name: "FlashZero",
            price: +((Math.random() * 100).toFixed(2)),
            description: "CS Diagnostics Corp is a pharmaceutical international wholesaler and manufacturer of medical technology. The current management has been supplying national and international specialists, practices, clinics as well as ministries of health. Its focus is on improving therapy results and reducing side effects."

        },
        {
            id: 24,
            name: "Genesis",
            price: +((Math.random() * 100).toFixed(2))

        },
        {
            id: 25,
            name: "InterNAP",
            price: +((Math.random() * 100).toFixed(2)),
            description: "Successfully executing the ideal infrastructure strategy requires a solution partner who understands your infrastructure needs today, with an eye on where they’re headed tomorrow. INAP partners with IT leaders like you to design and operate high-performance, Bare Metal infrastructure. We identify the right configuration for your apps and data, resulting in purpose-built, expertly managed deployments that simplifies your infrastructure journey and accelerates innovation"

        },
        {
            id: 26,
            name: "MeetMe",
            price: +((Math.random() * 100).toFixed(2)),
            description: "The Meet Group is the top provider of livestreaming video and creator economy solutions for a number of the world’s top social apps. We connect millions of people every single day — while also giving brands new opportunities to monetize and engage their audiences. In addition to working with some of the most well-known social apps on the planet, The Meet Group has built its own portfolio of mobile apps and services to help even more people find connection and community."

        },
        {
            id: 27,
            name: "Netease",
            price: +((Math.random() * 100).toFixed(2)),
            description: "NetEase, Inc. (NASDAQ: NTES and HKEX: 9999, 'NetEase') is a leading internet and game services provider centered around premium content. With extensive offerings across its expanding gaming ecosystem, the Company develops and operates some of the most popular and longest running mobile and PC games available in China and globally. Powered by one of the largest in-house game R&D teams focused on mobile, PC and console, NetEase creates superior gaming experiences, inspires players, and passionately delivers value for its thriving community worldwide. By infusing play with culture, and education with technology, NetEase transforms gaming into a meaningful vehicle to build a more entertaining and enlightened world."

        },
        {
            id: 28,
            name: "Qihoo",
            price: +((Math.random() * 100).toFixed(2)),
            description: "Qihoo 360 Technology offers internet and mobile security products, online advertising and internet value-added services in China."
        }
    ]

    getStocks() {
        return this.StocksList;
    }

    updateStockPrice() {
        this.StocksList.forEach(item => {
            item.price = +((Math.random() * 100).toFixed(2))
        });
    }
    filterStocks(searchTxt: string) {
        return this.StocksList.filter((stock) => stock.name.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase()))
    }
    getStockNameById(id: number) {
        return this.StocksList.find((stock) => stock.id == id)?.name
    }
}