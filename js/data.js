const portfolioData = {
  student: {
    name: "Nguyễn Phương Anh",
    id: "25100858",
    school: "Trường Đại học Y Dược, Đại học Quốc gia Hà Nội",
    field: "Y Dược"
  },
  cases: [
    {
      number: "01",
      title: "Quản lý tệp và thư mục",
      focus: "Tổ chức tài liệu số",
      pdf: "files/tuan-1.pdf",
      highlighted: false,
      tags: ["mục tiêu", "quy trình", "lưu trữ", "ứng dụng"],
      abstract:
        "Thực hành tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tài liệu học tập để hình thành thói quen lưu trữ khoa học.",
      sections: {
        "Mục tiêu":
          "Rèn luyện kỹ năng quản lý tệp và thư mục trên máy tính, biết cách tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tài liệu học tập một cách khoa học.",
        "Tóm tắt quá trình":
          "Sinh viên thực hành mở File Explorer, truy cập ổ đĩa, tạo thư mục cá nhân ThucHanh_NguyenPhuongAnh, tạo tệp GhiChu.txt, đổi tên thành GhiChuQuanTrong.txt, tạo thư mục con TaiLieu, sao chép, di chuyển, xóa và khôi phục tệp theo yêu cầu.",
        "Kết quả":
          "Hoàn thành đầy đủ chuỗi thao tác quản lý tệp và thư mục. Sinh viên hình thành thói quen lưu trữ tài liệu học tập theo cấu trúc rõ ràng, thuận tiện cho việc tìm kiếm và nộp bài.",
        "Bài học":
          "Quản lý tệp là kỹ năng nền tảng trong học tập số. Khi tài liệu được tổ chức tốt, người học giảm nguy cơ thất lạc file, dễ sao lưu và dễ kiểm soát phiên bản.",
        "Ứng dụng thực tế":
          "Trong học tập Y Dược, sinh viên phải quản lý giáo trình, bài báo y khoa, hình ảnh chẩn đoán, báo cáo thực hành và tài liệu tham khảo. Cấu trúc thư mục tốt giúp bảo đảm tính chính xác và chuyên nghiệp."
      }
    },
    {
      number: "02",
      title: "Tìm kiếm và đánh giá thông tin",
      focus: "AI trong chẩn đoán hình ảnh",
      pdf: "files/tuan-2.pdf",
      highlighted: true,
      tags: ["y học chứng cứ", "AI y tế", "nguồn học thuật", "kiểm chứng"],
      abstract:
        "Tìm kiếm và đánh giá tài liệu về ứng dụng AI trong chẩn đoán hình ảnh y khoa tại Việt Nam giai đoạn 2021-2026.",
      sections: {
        "Mục tiêu":
          "Rèn luyện khả năng tìm kiếm, chọn lọc và đánh giá thông tin học thuật về ứng dụng AI trong chẩn đoán hình ảnh y khoa tại Việt Nam giai đoạn 2021-2026.",
        "Tóm tắt quá trình":
          "Sinh viên sử dụng PubMed, IEEE Xplore, Google Scholar, báo cáo Bộ Y tế, WHO và các báo cáo công nghệ y tế. Tài liệu được đánh giá theo độ tin cậy, tính cập nhật, mức độ liên quan và phạm vi ứng dụng tại Việt Nam.",
        "Kết quả":
          "Xây dựng danh mục tài liệu gồm bài báo khoa học, báo cáo chính sách, hướng dẫn quốc tế và báo cáo công nghệ. Nội dung cho thấy AI đang hỗ trợ chẩn đoán X-quang, CT, MRI, rút ngắn thời gian xử lý và hỗ trợ sàng lọc bệnh lý.",
        "Bài học":
          "Thông tin y khoa cần được kiểm chứng nghiêm ngặt. Khi nghiên cứu AI trong y tế, người học cần ưu tiên nguồn có phản biện, cơ quan có thẩm quyền và dữ liệu thực nghiệm rõ ràng.",
        "Ứng dụng thực tế":
          "Kỹ năng này giúp sinh viên tiếp cận y học chứng cứ, đánh giá công nghệ chẩn đoán mới và hiểu rõ các rào cản khi triển khai AI trong bệnh viện như dữ liệu, bản quyền, hạ tầng và năng lực nhân sự."
      }
    },
    {
      number: "03",
      title: "Viết prompt hiệu quả",
      focus: "Prompt cho học tập Y Dược",
      pdf: "files/tuan-3.pdf",
      highlighted: false,
      tags: ["prompt", "PICO", "lâm sàng", "tự học"],
      abstract:
        "Thử nghiệm prompt ở nhiều mức để tóm tắt nghiên cứu lâm sàng, giải thích cơ chế bệnh sinh và tạo câu hỏi tình huống.",
      sections: {
        "Mục tiêu":
          "Phát triển kỹ năng viết prompt để khai thác hiệu quả các mô hình AI trong học tập Y Dược, đặc biệt với tác vụ tóm tắt nghiên cứu lâm sàng, giải thích cơ chế bệnh sinh và tạo câu hỏi tình huống lâm sàng.",
        "Tóm tắt quá trình":
          "Sinh viên thử nghiệm ba tác vụ: tóm tắt bài nghiên cứu thử nghiệm lâm sàng, giải thích cơ chế bão cytokine và tạo câu hỏi case study về dược lý học lâm sàng. Mỗi tác vụ được xây dựng với ba mức prompt: cơ bản, cải tiến và nâng cao.",
        "Kết quả":
          "Prompt có vai trò chuyên môn, cấu trúc đầu ra rõ ràng và tiêu chí y khoa cụ thể giúp AI phản hồi chính xác hơn. Cấu trúc PICO hỗ trợ tóm tắt nghiên cứu lâm sàng có hệ thống.",
        "Bài học":
          "Trong Y Dược, prompt mơ hồ có thể tạo kết quả thiếu chính xác hoặc bỏ sót chỉ số quan trọng. Người học cần nêu rõ đối tượng, mục tiêu, mức độ chuyên môn, cấu trúc và yêu cầu kiểm chứng.",
        "Ứng dụng thực tế":
          "Prompt hiệu quả hỗ trợ tóm tắt y văn, giải thích cơ chế bệnh học, tạo câu hỏi ôn tập và xây dựng tình huống lâm sàng. Kết quả AI vẫn cần được đối chiếu với tài liệu chuyên môn."
      }
    },
    {
      number: "04",
      title: "Hợp tác trực tuyến",
      focus: "Research workflow",
      pdf: "files/tuan-4.pdf",
      highlighted: false,
      tags: ["Trello", "Drive", "Discord", "bảo mật"],
      abstract:
        "Sử dụng Trello, Google Drive và Discord để quản lý nhiệm vụ, lưu trữ tài liệu và trao đổi nhóm trong bối cảnh Y Dược.",
      sections: {
        "Mục tiêu":
          "Rèn luyện kỹ năng sử dụng công cụ hợp tác trực tuyến để tối ưu hóa quy trình nghiên cứu, tổng hợp tài liệu, quản lý thử nghiệm và thiết kế sản phẩm trong bối cảnh Y Dược.",
        "Tóm tắt quá trình":
          "Trello hỗ trợ quản lý nhiệm vụ theo từng giai đoạn, Google Drive dùng để lưu trữ tài liệu nghiên cứu và bản thảo, Discord hỗ trợ trao đổi nhóm, chia sẻ màn hình và cập nhật tiến độ.",
        "Kết quả":
          "Nhóm có quy trình làm việc rõ ràng hơn, nhiệm vụ được cụ thể hóa bằng thẻ công việc, tài liệu được lưu trữ theo cấu trúc đa cấp và thông tin nhóm được trao đổi theo kênh chuyên môn.",
        "Bài học":
          "Hợp tác trực tuyến trong dự án Y Dược cần bảo mật, phân quyền rõ ràng và quản lý thông tin chặt chẽ. Chia sẻ tài liệu thiếu kiểm soát có thể làm rò rỉ dữ liệu nghiên cứu hoặc nội dung chuyên môn.",
        "Ứng dụng thực tế":
          "Kỹ năng này có thể áp dụng vào làm việc nhóm trong nghiên cứu dược phẩm, tổng hợp tài liệu y khoa, quản lý báo cáo thực hành, chuẩn bị thuyết trình chuyên môn và phối hợp dự án học thuật."
      }
    },
    {
      number: "05",
      title: "Sáng tạo nội dung với AI",
      focus: "Truyền thông sức khỏe",
      pdf: "files/tuan-5.pdf",
      highlighted: false,
      tags: ["Gemini", "Canva", "infographic", "kiểm định"],
      abstract:
        "Kết hợp AI tạo sinh và kiểm định của con người để hỗ trợ nghiên cứu, thiết kế slide và truyền thông kiến thức Y Dược.",
      sections: {
        "Mục tiêu":
          "Thực hành sử dụng AI tạo sinh để hỗ trợ nghiên cứu và truyền thông kiến thức Y Dược, đồng thời nhận diện rủi ro thông tin sai lệch trong lĩnh vực sức khỏe.",
        "Tóm tắt quá trình":
          "Sinh viên sử dụng Gemini để tổng hợp dữ liệu, đơn giản hóa thuật ngữ y khoa và lập dàn ý nội dung. Bing Image Creator tạo hình minh họa phòng thí nghiệm dược học tương lai, mô hình DNA và phân tử thuốc. Canva Magic Design hỗ trợ thiết kế layout và hoàn thiện sản phẩm trực quan.",
        "Kết quả":
          "Xây dựng được quy trình sáng tạo nội dung kết hợp AI và kiểm định của con người. Sinh viên nhận diện hạn chế của AI như dẫn chứng chung chung, nguy cơ tạo thông tin y tế sai, lỗi hình ảnh y khoa và lỗi font tiếng Việt.",
        "Bài học":
          "AI có thể hỗ trợ nhanh trong sáng tạo nội dung, nhưng lĩnh vực Y Dược đòi hỏi kiểm chứng nghiêm ngặt. Không dùng thông tin AI tạo ra như lời khuyên y tế nếu chưa đối chiếu với nguồn đáng tin cậy.",
        "Ứng dụng thực tế":
          "Kỹ năng này hỗ trợ tạo slide học tập, infographic truyền thông sức khỏe, tài liệu giải thích thuật ngữ y khoa và nội dung phổ biến kiến thức cho cộng đồng. Mọi nội dung cần được kiểm tra chuyên môn trước khi sử dụng."
      }
    },
    {
      number: "06",
      title: "AI có trách nhiệm",
      focus: "Đạo đức AI y khoa",
      pdf: "files/tuan-6.pdf",
      highlighted: true,
      tags: ["liêm chính", "bảo mật", "y đức", "minh bạch"],
      abstract:
        "Phân tích nguyên tắc sử dụng AI có trách nhiệm trong Y Dược, đặc biệt về liêm chính học thuật, bảo mật dữ liệu và y đức.",
      sections: {
        "Mục tiêu":
          "Hiểu và thực hành nguyên tắc sử dụng AI có trách nhiệm trong Y Dược và nghiên cứu y khoa, đặc biệt liên quan đến liêm chính học thuật, bảo mật dữ liệu, đạo văn, sai lệch thông tin y tế và y đức.",
        "Tóm tắt quá trình":
          "Sinh viên nghiên cứu quy định về liêm chính học thuật, phân tích khoảng trống chính sách AI trong khối ngành sức khỏe, thực hiện nhiệm vụ học tập có sự hỗ trợ của AI và lập nhật ký prompt minh bạch.",
        "Kết quả":
          "Sinh viên nhận thức rõ AI chỉ là công cụ hỗ trợ, không thể chịu trách nhiệm thay con người trong vấn đề y khoa. Mọi số liệu, thông tin thuốc, cơ chế bệnh học hoặc hướng dẫn điều trị cần được xác minh bằng nguồn chính thống.",
        "Bài học":
          "Sử dụng AI trong Y Dược cần tiêu chuẩn đạo đức cao. Người học phải minh bạch việc sử dụng AI, không nhập dữ liệu bệnh nhân lên công cụ công cộng, không sao chép nội dung AI và luôn kiểm chứng nguồn.",
        "Ứng dụng thực tế":
          "Kỹ năng sử dụng AI có trách nhiệm giúp sinh viên hình thành tư duy an toàn trong học tập và nghiên cứu, bảo vệ dữ liệu nhạy cảm, duy trì liêm chính học thuật và chuẩn bị tốt hơn cho môi trường y tế số."
      }
    }
  ],
  summary: [
    {
      label: "Đã học được",
      text:
        "Cách quản lý tài liệu số, tìm kiếm thông tin học thuật, viết prompt, hợp tác trực tuyến, sáng tạo nội dung bằng AI và sử dụng AI có trách nhiệm trong lĩnh vực Y Dược."
    },
    {
      label: "Kỹ năng cải thiện",
      text:
        "Tổ chức tài liệu, tìm kiếm nguồn y khoa, đánh giá độ tin cậy, tư duy phản biện, làm việc nhóm, trình bày nội dung trực quan và kiểm soát chất lượng đầu ra của AI."
    },
    {
      label: "Khó khăn",
      text:
        "Xử lý thuật ngữ chuyên ngành, chọn lọc nguồn y khoa đáng tin cậy, viết prompt đủ chính xác, kiểm chứng thông tin AI tạo ra và bảo đảm nội dung không vi phạm nguyên tắc học thuật."
    },
    {
      label: "Cách khắc phục",
      text:
        "Chia nhỏ nhiệm vụ, ưu tiên nguồn học thuật và nguồn chính thống, đối chiếu nhiều tài liệu, tự biên tập nội dung, lưu nhật ký prompt và kiểm tra sản phẩm trước khi hoàn thiện."
    },
    {
      label: "Định hướng tương lai",
      text:
        "Tiếp tục áp dụng vào học tập Y Dược, đọc y văn, làm báo cáo nghiên cứu, thiết kế tài liệu truyền thông sức khỏe, làm việc nhóm và tiếp cận công nghệ AI y tế một cách thận trọng."
    },
    {
      label: "Liên hệ lĩnh vực",
      text:
        "Portfolio cho thấy công cụ số và AI có thể hỗ trợ hiệu quả cho học tập nếu được kết hợp với tư duy kiểm chứng, y đức và trách nhiệm học thuật."
    }
  ]
};
