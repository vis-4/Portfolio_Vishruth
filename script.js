function scrollToContact() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
}

function downloadResume() {
    const link = document.createElement("a");
    link.href = "vishruth_resume.pdf";
    link.download = "Vishruth_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
