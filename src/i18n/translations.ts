// ============================================================
// i18n Translation System — Matrix Marketing
// ============================================================

export type Locale = 'vi' | 'en'

export const translations = {
  vi: {
    // Navbar
    nav: {
      services: 'Dịch vụ',
      solutions: 'Giải pháp',
      process: 'Quy trình',
      caseStudies: 'Dự án',
      about: 'Về chúng tôi',
      cta: 'Liên hệ ngay',
    },

    // Hero
    hero: {
      label: 'Agency Marketing Sáng tạo',
      line1: 'Marketing',
      line2: 'Thúc đẩy',
      line2Accent: 'Tăng trưởng.',
      line3: 'Doanh nghiệp.',
      subtitle:
        'Chúng tôi xây dựng những chiến lược marketing giúp thương hiệu tiếp cận đúng khách hàng, tạo kết nối thực sự và thúc đẩy tăng trưởng bền vững.',
      cta1: 'Bắt đầu dự án',
      cta2: 'Khám phá dự án',
      scroll: 'Cuộn xuống',
      stats: [
        { num: '+120', label: 'Dự án' },
        { num: '+45', label: 'Thương hiệu' },
        { num: '8+', label: 'Năm kinh nghiệm' },
        { num: '3.2M+', label: 'Lượt tiếp cận' },
      ],
    },

    // Stats
    stats: {
      sectionLabel: 'Con số biết nói',
      heading: 'Hiệu quả thực tế,\ntăng trưởng đo lường được.',
      sub: 'Mỗi con số đại diện cho một doanh nghiệp thực sự đã tăng trưởng cùng Matrix Marketing.',
      items: [
        { value: 120, prefix: '+', suffix: '', label: 'Dự án hoàn thành', desc: 'Trải rộng nhiều ngành và thị trường khác nhau' },
        { value: 45, prefix: '+', suffix: '', label: 'Thương hiệu nâng tầm', desc: 'Từ startup đến doanh nghiệp lớn' },
        { value: 8, prefix: '', suffix: '+', label: 'Năm kinh nghiệm', desc: 'Xây dựng hệ thống marketing tăng trưởng' },
        { value: 3.2, prefix: '', suffix: 'M+', label: 'Lượt tiếp cận', desc: 'Qua các chiến dịch chiến lược hiệu quả' },
      ],
    },

    // Services
    services: {
      sectionLabel: 'Dịch vụ của chúng tôi',
      heading: 'Kiến tạo tăng trưởng.\nĐịnh vị vị thế dẫn đầu.',
      sub: 'Từ chiến lược đến thực thi, chúng tôi xây dựng hệ thống marketing tạo ra tăng trưởng có thể đo lường.',
      viewAll: 'Xem tất cả dịch vụ',
      viewAllSub: 'Hoặc khám phá case study bên dưới',
      items: [
        {
          num: '01', title: 'Chiến lược thương hiệu',
          desc: 'Xác định bạn là ai, đại diện cho điều gì và định vị ra sao. Xây dựng thương hiệu tạo dấu ấn và sức ảnh hưởng bền lâu.',
          tags: ['Định vị', 'Nhận diện', 'Thông điệp'],
        },
        {
          num: '02', title: 'Marketing kỹ thuật số',
          desc: 'Chiến dịch đa kênh tạo tác động chuyển đổi mạnh mẽ. SEO, SEM, email — tối ưu hoá từng điểm chạm của khách hàng.',
          tags: ['SEO', 'SEM', 'Email', 'CRO'],
        },
        {
          num: '03', title: 'Mạng xã hội',
          desc: 'Nội dung gắn liền văn hoá, xây dựng cộng đồng gắn kết. Định hướng và phát triển hiện diện thương hiệu bài bản.',
          tags: ['Nội dung', 'Cộng đồng', 'Tăng trưởng'],
        },
        {
          num: '04', title: 'Nội dung & Sáng tạo',
          desc: 'Kể câu chuyện thương hiệu chạm tới cảm xúc. Sản xuất nội dung hấp dẫn, thúc đẩy tương tác và gắn kết khách hàng.',
          tags: ['Video', 'Copywriting', 'Thiết kế'],
        },
        {
          num: '05', title: 'Marketing hiệu suất',
          desc: 'Quảng cáo trả phí dựa trên dữ liệu mang lại ROI rõ ràng. Mở rộng chiến dịch với từng đồng ngân sách minh bạch.',
          tags: ['Quảng cáo', 'ROI', 'Đo lường'],
        },
        {
          num: '06', title: 'Trải nghiệm web',
          desc: 'Trải nghiệm số tối ưu chuyển đổi tối đa. Landing page và website hiệu năng cao, xây dựng cho mục tiêu tăng trưởng.',
          tags: ['Landing Page', 'UX', 'Chuyển đổi'],
        },
      ],
    },

    // Problems
    problems: {
      heading: 'Marketing không nên là',
      headingAccent: 'canh bạc đoán mò.',
      sectionLabel: 'Vấn đề chúng tôi giải quyết',
      items: [
        'Sai tệp khách hàng.',
        'Chi phí tiếp cận ngày càng tăng.',
        'Nội dung thiếu định hướng rõ ràng.',
        'Có lưu lượng truy cập nhưng thiếu chuyển đổi.',
      ],
      solutionLabel: 'Cách tiếp cận của chúng tôi',
      solutionHeading: 'Biến sự phức tạp\nthành',
      solutionAccent: 'tăng trưởng.',
      solutionDesc:
        'Thay vì các chiến thuật rời rạc, chúng tôi xây dựng hệ thống marketing tích hợp — chiến lược, sáng tạo, truyền thông và dữ liệu cùng tạo ra kết quả đột phá.',
      flowItems: ['Chiến lược', 'Sáng tạo', 'Truyền thông', 'Dữ liệu'],
      flowResult: '= Tăng trưởng',
      quote: '"Hầu hết thương hiệu đều có đủ mảnh ghép. Chúng tôi tạo dựng hệ thống giúp chúng vận hành nhịp nhàng cùng nhau."',
    },

    // Solution
    solution: {
      sectionLabel: 'Hệ thống của chúng tôi',
      heading: 'Một hệ thống liên kết,\nkhông phải chiến thuật rời rạc.',
      desc: 'Mọi yếu tố trong hệ thống marketing của chúng tôi đều hoạt động liên kết. Chiến lược định hướng sáng tạo. Sáng tạo thúc đẩy truyền thông. Truyền thông tạo ra dữ liệu. Dữ liệu hoàn thiện tất cả — tạo ra tăng trưởng tích lũy.',
      points: [
        'Dẫn dắt bằng chiến lược, không phải thực thi phản ứng',
        'Sáng tạo có chuyển đổi, không chỉ trông đẹp',
        'Mỗi kênh đều được đo lường và có trách nhiệm',
      ],
      nodes: [
        { id: 'strategy', label: 'CHIẾN LƯỢC', desc: 'Nghiên cứu, định vị và xây dựng lộ trình' },
        { id: 'creative', label: 'SÁNG TẠO', desc: 'Kể chuyện, thiết kế và sản xuất nội dung' },
        { id: 'media', label: 'TRUYỀN THÔNG', desc: 'Chiến lược kênh và phân phối quảng cáo' },
        { id: 'data', label: 'DỮ LIỆU', desc: 'Phân tích, đo lường và tối ưu hoá' },
        { id: 'growth', label: 'TĂNG TRƯỞNG', desc: 'Kết quả bền vững và lợi nhuận tích lũy' },
      ],
    },

    // Process
    process: {
      sectionLabel: 'Quy trình làm việc',
      heading: '5 bước kiến tạo\ntăng trưởng bứt phá.',
      sub: 'Quy trình chuẩn hóa qua 8 năm và hơn 120 dự án — tinh gọn, tốc độ và chuẩn xác.',
      steps: [
        { num: '01', title: 'Khám phá', detail: '2–3 tuần', desc: 'Đào sâu vào mô hình kinh doanh, thị trường, đối thủ và khách hàng. Không phỏng đoán — chỉ dựa trên dữ liệu thực tế.', items: ['Kiểm toán thương hiệu', 'Nghiên cứu thị trường', 'Phỏng vấn khách hàng', 'Phân tích cạnh tranh'] },
        { num: '02', title: 'Chiến lược', detail: '1–2 tuần', desc: 'Chuyển hóa dữ liệu thành lộ trình marketing rõ ràng. Xác định kênh, thông điệp, chỉ số KPI và con đường tăng trưởng.', items: ['Định vị thương hiệu', 'Chiến lược kênh', 'Nội dung cốt lõi', 'Khung KPI'] },
        { num: '03', title: 'Sáng tạo', detail: '2–4 tuần', desc: 'Hiện thực hóa chiến lược bằng sáng tạo — concept chiến dịch, nội dung, hình ảnh và thông điệp chạm đúng khách hàng.', items: ['Ý tưởng sáng tạo', 'Sản xuất nội dung', 'Creative quảng cáo', 'Landing page'] },
        { num: '04', title: 'Triển khai', detail: 'Liên tục', desc: 'Thực thi chuẩn xác trên các kênh. Kích hoạt chiến dịch, tối ưu vị trí hiển thị và theo dõi hiệu suất mỗi ngày.', items: ['Kích hoạt đa kênh', 'Quản lý chiến dịch', 'Quản lý cộng đồng', 'Báo cáo'] },
        { num: '05', title: 'Tối ưu hoá', detail: 'Hàng tháng', desc: 'Dữ liệu phản hồi liên tục vào chiến lược. Tinh chỉnh dựa trên hiệu quả thực tế — nhân rộng kết quả theo thời gian.', items: ['Phân tích hiệu suất', 'A/B testing', 'Tinh chỉnh chiến lược', 'Mở rộng quy mô'] },
      ],
    },

    // Case Studies
    caseStudies: {
      sectionLabel: 'Dự án tiêu biểu',
      heading: 'Con số biết nói,\nkết quả thực chứng.',
      viewAll: 'Xem tất cả dự án',
      items: [
        { category: 'Chiến lược thương hiệu', title: 'Xây dựng thương hiệu iconic từ đầu', desc: 'Tái định vị thương hiệu toàn diện cho một startup fintech B2C — từ nhận diện đến hiện diện thị trường.', result: '+340% nhận diện thương hiệu sau 6 tháng', metric: '+340%', metricLabel: 'Độ nhận diện', tags: ['Thương hiệu', 'Chiến lược', 'Digital'], color: '#00ff87', year: '2024', gradient: 'from-emerald-500/20 to-transparent' },
        { category: 'Chiến dịch kỹ thuật số', title: 'Chiến dịch hiệu suất ở quy mô lớn', desc: 'Chiến dịch kỹ thuật số đa kênh trên 5 nền tảng, thu hút khách hàng tiềm năng chất lượng với CPL thấp kỷ lục.', result: '-60% CPL trong khi tăng ngân sách 4 lần', metric: '-60%', metricLabel: 'Tối ưu CPL', tags: ['Paid Media', 'Hiệu suất', 'Dữ liệu'], color: '#0099ff', year: '2024', gradient: 'from-blue-500/20 to-transparent' },
        { category: 'Ra mắt sản phẩm', title: 'Từ 0 đến 1 triệu người dùng trong 90 ngày', desc: 'Chiến lược go-to-market toàn diện và thực thi cho sản phẩm công nghệ tiêu dùng ra mắt.', result: '1M+ người dùng trong quý đầu tiên', metric: '1M+', metricLabel: 'Người dùng mới', tags: ['Ra mắt', 'Tăng trưởng', 'Mạng xã hội'], color: '#a855f7', year: '2023', gradient: 'from-purple-500/20 to-transparent' },
        { category: 'Chiến dịch mạng xã hội', title: 'Chiến lược viral cho thế hệ Gen Z', desc: 'Chiến lược nội dung do creator dẫn dắt biến một thương hiệu truyền thống thành "social-first powerhouse".', result: '28M lượt tiếp cận tự nhiên, tỷ lệ tương tác 4.2%', metric: '28M', metricLabel: 'Lượt tiếp cận', tags: ['Mạng xã hội', 'Nội dung', 'KOL'], color: '#f59e0b', year: '2023', gradient: 'from-amber-500/20 to-transparent' },
      ],
    },

    // WhyMatrix
    why: {
      sectionLabel: 'Thế mạnh khác biệt',
      heading: 'Tại sao chọn Matrix?',
      sub: 'Tám năm xây dựng hệ thống marketing tích lũy. Đây là điều làm chúng tôi khác biệt.',
      cta: 'Liên hệ ngay',
      metric1: 'Tập trung doanh thu',
      metric2: 'Năm thành tích',
      items: [
        { title: 'Tư duy chiến lược', desc: 'Bắt đầu từ câu hỏi "tại sao" trước "như thế nào". Mọi bước đi đều bắt nguồn từ dữ liệu nghiên cứu và tầm nhìn dài hạn.' },
        { title: 'Thực thi sáng tạo', desc: 'Ý tưởng đột phá, chế tác tạo chuyển đổi. Chuẩn mực sản xuất cao cấp tại mọi điểm chạm thương hiệu.' },
        { title: 'Dựa trên dữ liệu', desc: 'Phân tích đa chiều và báo cáo hiệu suất minh bạch định hướng mọi quyết định đầu tư và tối ưu.' },
        { title: 'Trọng tâm kinh doanh', desc: 'Chỉ số ảo không tạo ra dòng tiền. Chúng tôi tối ưu cho doanh thu thực, biên lợi nhuận và tăng trưởng bền vững.' },
        { title: 'Đối tác đồng hành', desc: 'Không đơn thuần là nhà cung cấp. Chúng tôi đồng hành như một bộ phận nội bộ vì thành công lâu dài của bạn.' },
      ],
    },

    // Testimonials
    testimonials: {
      sectionLabel: 'Tiếng nói đối tác',
      heading: 'Đánh giá từ khách hàng.',
      items: [
        { quote: 'Matrix đã giúp chúng tôi biến marketing từ một trung tâm chi phí thành động cơ tăng trưởng. Cách tiếp cận chiến lược của họ hoàn toàn thay đổi cách chúng tôi nghĩ về việc thu hút khách hàng.', name: 'Nguyễn Văn Anh', title: 'CEO', company: 'TechViet Solutions', initials: 'NA', color: '#00ff87', result: '+280% Doanh thu' },
        { quote: 'Làm việc với Matrix thực sự mang tính chuyển đổi. Họ không chỉ chạy chiến dịch — họ xây dựng một hệ thống. CAC của chúng tôi giảm 45% trong khi tỷ lệ chuyển đổi tăng gấp ba.', name: 'Trần Minh Khoa', title: 'CMO', company: 'Vinacom Group', initials: 'TK', color: '#0099ff', result: '-45% CAC' },
        { quote: 'Nhận diện thương hiệu họ tạo ra cho chúng tôi chính xác là những gì cần để cạnh tranh ở phân khúc cao cấp. Mọi yếu tố đều mang tính chiến lược, không chỉ đẹp mắt.', name: 'Lê Thị Thu Hà', title: 'Founder', company: 'Elegance Retail', initials: 'LH', color: '#a855f7', result: 'Thị phần x3' },
        { quote: 'Matrix không chỉ là một agency — họ là đối tác tăng trưởng thực sự. Hai năm hợp tác, họ hiểu doanh nghiệp của chúng tôi như chính chúng tôi. Kết quả nói lên tất cả.', name: 'Phạm Quốc Bảo', title: 'Giám đốc', company: 'FastGrow Vietnam', initials: 'PB', color: '#f59e0b', result: 'ROI x4' },
      ],
    },

    // CTA
    cta: {
      sectionLabel: 'Bắt đầu ngay',
      heading: 'Sẵn sàng đưa doanh nghiệp',
      headingAccent: 'bứt phá dẫn đầu?',
      desc: 'Hãy cùng xây dựng chiến lược tạo ra tác động thực tế. Đặt lịch tư vấn miễn phí để khám phá tiềm năng tăng trưởng của bạn.',
      btn: 'Bắt đầu dự án',
      badges: ['Phản hồi nhanh', 'Ưu tiên chiến lược', 'Kết quả đo lường được', 'Đối tác dài hạn'],
      badgeIcons: ['⚡', '🎯', '📊', '🤝'],
    },

    // Footer
    footer: {
      desc: 'Chúng tôi xây dựng hệ thống marketing tạo ra tăng trưởng có thể đo lường — từ chiến lược đến thực thi, chúng tôi đưa doanh nghiệp tiến về phía trước.',
      address: 'TP. Hồ Chí Minh, Việt Nam',
      copyright: 'Bảo lưu mọi quyền.',
      available: 'Đang nhận dự án mới',
      links: {
        'Dịch vụ': ['Chiến lược thương hiệu', 'Marketing kỹ thuật số', 'Mạng xã hội', 'Nội dung & Sáng tạo', 'Marketing hiệu suất', 'Trải nghiệm web'],
        'Giải pháp': ['Startup', 'Doanh nghiệp lớn', 'Thương mại điện tử', 'SaaS', 'Bán lẻ'],
        'Công ty': ['Về chúng tôi', 'Quy trình', 'Dự án', 'Tuyển dụng', 'Liên hệ'],
      },
      legal: ['Chính sách bảo mật', 'Điều khoản dịch vụ', 'Chính sách Cookie'],
    },
  },

  en: {
    nav: {
      services: 'Services',
      solutions: 'Solutions',
      process: 'Process',
      caseStudies: 'Case Studies',
      about: 'About',
      cta: "Let's Talk",
    },

    hero: {
      label: 'Creative Marketing Agency',
      line1: 'Marketing',
      line2: 'That',
      line2Accent: 'Moves.',
      line3: 'Business.',
      subtitle:
        'We build marketing strategies that help brands reach the right customers, create genuine connections, and drive sustainable growth.',
      cta1: 'Start a Project',
      cta2: 'Explore Our Work',
      scroll: 'Scroll',
      stats: [
        { num: '+120', label: 'Projects' },
        { num: '+45', label: 'Brands' },
        { num: '8+', label: 'Years Exp.' },
        { num: '3.2M+', label: 'Reached' },
      ],
    },

    stats: {
      sectionLabel: 'Numbers speak',
      heading: 'Proven results,\nmeasurable growth.',
      sub: 'Every metric represents a real business that grew with Matrix Marketing.',
      items: [
        { value: 120, prefix: '+', suffix: '', label: 'Projects Completed', desc: 'Across diverse industries and markets' },
        { value: 45, prefix: '+', suffix: '', label: 'Brands Elevated', desc: 'From startups to enterprise companies' },
        { value: 8, prefix: '', suffix: '+', label: 'Years Experience', desc: 'Building marketing systems that grow' },
        { value: 3.2, prefix: '', suffix: 'M+', label: 'Customers Reached', desc: 'Through strategic campaigns' },
      ],
    },

    services: {
      sectionLabel: 'What we do',
      heading: 'Built to grow.\nDesigned to lead.',
      sub: 'From strategy to execution, we build marketing systems designed to create measurable growth.',
      viewAll: 'View All Services',
      viewAllSub: 'Or explore case studies below',
      items: [
        { num: '01', title: 'Brand Strategy', desc: 'We define who you are, what you stand for, and how the market perceives you. From positioning to identity, we build brands that resonate.', tags: ['Positioning', 'Identity', 'Messaging'] },
        { num: '02', title: 'Digital Marketing', desc: 'Multi-channel digital campaigns engineered for impact. SEO, SEM, email — every touchpoint optimized for conversion.', tags: ['SEO', 'SEM', 'Email', 'CRO'] },
        { num: '03', title: 'Social Media', desc: 'Culturally relevant content that builds communities. We manage, create, and grow your social presence with purpose.', tags: ['Content', 'Community', 'Growth'] },
        { num: '04', title: 'Content & Creative', desc: 'Storytelling that captivates. From video to editorial, we produce content that drives engagement and brand affinity.', tags: ['Video', 'Copywriting', 'Design'] },
        { num: '05', title: 'Performance Marketing', desc: 'Data-driven paid media that delivers measurable ROI. We run campaigns that scale, with every dollar accountable.', tags: ['Paid Ads', 'ROI', 'Attribution'] },
        { num: '06', title: 'Web Experience', desc: 'Digital experiences that convert. High-performance landing pages, websites, and micro-experiences built for growth.', tags: ['Landing Pages', 'UX', 'Conversion'] },
      ],
    },

    problems: {
      heading: "Marketing shouldn't feel like",
      headingAccent: 'guesswork.',
      sectionLabel: 'The problems we solve',
      items: ['Wrong audience.', 'Rising acquisition cost.', 'Content without direction.', 'Traffic without conversion.'],
      solutionLabel: 'Our approach',
      solutionHeading: 'We turn complexity\ninto',
      solutionAccent: 'growth.',
      solutionDesc: "Instead of scattered tactics, we build an integrated marketing system — strategy, creative, media, and data working together to create compounding results.",
      flowItems: ['Strategy', 'Creative', 'Media', 'Data'],
      flowResult: '= Growth',
      quote: '"Most brands have the pieces. We build the system that makes them work together."',
    },

    solution: {
      sectionLabel: 'Our System',
      heading: 'A connected system,\nnot scattered tactics.',
      desc: 'Every element of our marketing system works in concert. Strategy informs creative. Creative drives media. Media generates data. Data refines everything — producing compounding growth.',
      points: [
        'Strategy-led approach, not reactive execution',
        'Creative that converts, not just looks good',
        'Every channel measured and accountable',
      ],
      nodes: [
        { id: 'strategy', label: 'STRATEGY', desc: 'Research, positioning & roadmap definition' },
        { id: 'creative', label: 'CREATIVE', desc: 'Storytelling, design & content production' },
        { id: 'media', label: 'MEDIA', desc: 'Channel strategy & paid distribution' },
        { id: 'data', label: 'DATA', desc: 'Analytics, attribution & optimization' },
        { id: 'growth', label: 'GROWTH', desc: 'Scalable results & compounding returns' },
      ],
    },

    process: {
      sectionLabel: 'How we work',
      heading: 'Five steps to\nmeasurable growth.',
      sub: 'A proven framework refined over 8 years and 120+ projects — structured for speed and precision.',
      steps: [
        { num: '01', title: 'Discover', detail: '2–3 weeks', desc: "We dig deep into your business, market, competitors and customers. No assumptions — only data-driven insights.", items: ['Business audit', 'Market research', 'Customer interviews', 'Competitive analysis'] },
        { num: '02', title: 'Strategy', detail: '1–2 weeks', desc: "From insights to a clear marketing roadmap. We define channels, messaging, KPIs, and the path to growth.", items: ['Brand positioning', 'Channel strategy', 'Content pillars', 'KPI framework'] },
        { num: '03', title: 'Create', detail: '2–4 weeks', desc: "Strategy becomes creative reality — campaigns, content, visuals and copy that resonate with your audience.", items: ['Creative concepts', 'Content production', 'Ad creatives', 'Landing pages'] },
        { num: '04', title: 'Launch', detail: 'Ongoing', desc: "Precision execution across channels. We activate campaigns, manage placements and monitor performance daily.", items: ['Multi-channel activation', 'Campaign management', 'Community management', 'Reporting'] },
        { num: '05', title: 'Optimize', detail: 'Monthly', desc: "Data loops back into strategy. We continuously improve based on what's working — compounding results over time.", items: ['Performance analysis', 'A/B testing', 'Strategy refinement', 'Growth scaling'] },
      ],
    },

    caseStudies: {
      sectionLabel: 'Selected work',
      heading: 'Results that\nspeak louder.',
      viewAll: 'View All Work',
      items: [
        { category: 'Brand Strategy', title: 'Building an Iconic Brand from Scratch', desc: 'Complete brand overhaul for a B2C fintech startup — from identity to market presence.', result: '+340% brand awareness in 6 months', metric: '+340%', metricLabel: 'Brand Awareness', tags: ['Branding', 'Strategy', 'Digital'], color: '#00ff87', year: '2024', gradient: 'from-emerald-500/20 to-transparent' },
        { category: 'Digital Campaign', title: 'Performance Campaign at Scale', desc: 'Multi-channel digital campaign across 5 platforms, driving qualified leads at record low CPL.', result: '-60% CPL while scaling budget 4x', metric: '-60%', metricLabel: 'Cost Per Lead', tags: ['Paid Media', 'Performance', 'Data'], color: '#0099ff', year: '2024', gradient: 'from-blue-500/20 to-transparent' },
        { category: 'Product Launch', title: 'Zero to 1 Million in 90 Days', desc: 'Full go-to-market strategy and execution for a consumer tech product launch.', result: '1M+ users acquired in first quarter', metric: '1M+', metricLabel: 'Users Acquired', tags: ['Launch', 'Growth', 'Social'], color: '#a855f7', year: '2023', gradient: 'from-purple-500/20 to-transparent' },
        { category: 'Social Campaign', title: 'Viral Social Strategy for Gen Z', desc: "Creator-led content strategy that turned a traditional brand into a social-first powerhouse.", result: '28M organic reach, 4.2% engagement rate', metric: '28M', metricLabel: 'Organic Reach', tags: ['Social Media', 'Content', 'Influencer'], color: '#f59e0b', year: '2023', gradient: 'from-amber-500/20 to-transparent' },
      ],
    },

    why: {
      sectionLabel: 'Why us',
      heading: 'Why Matrix?',
      sub: "Eight years of building marketing systems that compound. Here's what sets us apart.",
      cta: "Let's Talk",
      metric1: 'Revenue Focused',
      metric2: 'Years Track Record',
      items: [
        { title: 'Strategic Thinking', desc: 'We start with why before how. Every decision is rooted in research, business context and long-term vision.' },
        { title: 'Creative Execution', desc: 'Ideas that stand out, craft that converts. Premium production at every touchpoint.' },
        { title: 'Data Driven', desc: 'Attribution, analytics and performance data guide every optimization and investment decision.' },
        { title: 'Business Focused', desc: "Vanity metrics don't pay bills. We optimize for revenue, margin and sustainable growth." },
        { title: 'Long-term Partnership', desc: "We're not a vendor. We're a growth partner invested in your long-term success." },
      ],
    },

    testimonials: {
      sectionLabel: 'Client voices',
      heading: 'What our clients say.',
      items: [
        { quote: 'Matrix helped us turn our marketing from a cost center into a growth engine. Their strategic approach completely changed how we think about customer acquisition.', name: 'Nguyen Van Anh', title: 'CEO', company: 'TechViet Solutions', initials: 'NA', color: '#00ff87', result: '+280% Revenue' },
        { quote: "Working with Matrix was transformative. They didn't just run campaigns — they built a system. Our CAC dropped 45% while our conversion rate tripled.", name: 'Tran Minh Khoa', title: 'CMO', company: 'Vinacom Group', initials: 'TK', color: '#0099ff', result: '-45% CAC' },
        { quote: "The brand identity they created for us is exactly what we needed to compete at the premium tier. Every element was strategic, not just beautiful.", name: 'Le Thu Ha', title: 'Founder', company: 'Elegance Retail', initials: 'LH', color: '#a855f7', result: '3x Market Share' },
        { quote: "Matrix isn't just an agency — they're genuine growth partners. Two years in, they know our business as well as we do. The results speak for themselves.", name: 'Pham Quoc Bao', title: 'Director', company: 'FastGrow Vietnam', initials: 'PB', color: '#f59e0b', result: '4x ROI' },
      ],
    },

    cta: {
      sectionLabel: 'Get started',
      heading: 'Ready to move your business',
      headingAccent: 'forward?',
      desc: "Let's build something that moves. Schedule a free strategy call and discover what's possible.",
      btn: 'Start a Project',
      badges: ['Quick Response', 'Strategy-First', 'Measurable Results', 'Long-term Partnership'],
      badgeIcons: ['⚡', '🎯', '📊', '🤝'],
    },

    footer: {
      desc: 'We build marketing systems that create measurable growth — from strategy to execution, we move businesses forward.',
      address: 'Ho Chi Minh City, Vietnam',
      copyright: 'All rights reserved.',
      available: 'Available for new projects',
      links: {
        Services: ['Brand Strategy', 'Digital Marketing', 'Social Media', 'Content & Creative', 'Performance Marketing', 'Web Experience'],
        Solutions: ['Startups', 'Enterprise', 'E-commerce', 'SaaS', 'Retail'],
        Company: ['About', 'Process', 'Work', 'Careers', 'Contact'],
      },
      legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    },
  },
} as const

export type Translations = typeof translations
