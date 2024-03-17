from bs4 import BeautifulSoup

# Example N°1: Scrapping a local html file

# Opens the file and assigns the content to a variable
""" with open("Python\\web-scrapping\\index.html", "r") as html_file:
    content = html_file.read()

    # Parses the content with lxml
    soup = BeautifulSoup(content, "lxml")
    # Finds all the div tags that have the class card
    course_cards = soup.find_all("div", class_="card" )
    for course in course_cards:
        # Gets the text inside the h5 tag
        course_name = course.h5.text
        # Gets the text inside the a tag, in this case, only the price
        course_price = course.a.text.split()[-1]

        # print(f"{course_name} costs {course_price}") """

# Example N°2: scrapping a job posting website
import requests
import time
import os


# Asks for a skill that will filter out some jobs
print("Put some skills that you are not familiar with")
print("To stop adding unfamiliar skills type \"stop\"")
unfamiliar_skills = []
while True:
    user_input = input(">")
    if user_input == "stop":
        break
    unfamiliar_skills.append(user_input)

print(f"Filtering out {unfamiliar_skills}")


def find_jobs(unfamiliar_skills):
    # requests the html from the python search results from timesjobs
    html_text = requests.get(
        "https://www.timesjobs.com/candidate/job-search.html?searchType=personalizedSearch&from=submit&searchTextSrc=&searchTextText=&txtKeywords=Python&txtLocation=#"
    ).text

    soup = BeautifulSoup(html_text, "lxml")
    # Gets all the instances of li elements that have the class belonging to the job posts
    jobs = soup.find_all("li", class_="clearfix job-bx wht-shd-bx")
    # loops through each job post and gives each one a number
    for index, job in enumerate(jobs):

        # Gets the text data from the span tag with the class "sim-posted"
        published_date = job.find("span", class_="sim-posted").span.text

        # only continues if the date is from one day ago
        if "1" in published_date:
            # Same things as the date but with the company name
            company_name = job.find("h3", class_="joblist-comp-name").text.replace(
                " ", ""
            )
            # And the skills
            skills = job.find("span", class_="srp-skills").text.replace(" ", "")

            # And the link too
            more_info = job.header.h2.a["href"]

            # Bonus: gets the experience required
            experience = job.find("ul", class_="top-jd-dtl clearfix").li.text.split(
                "l"
            )[-1]

            # Only continues if the unfamiliar skill is not in the job post
            if not any(skill in skills for skill in unfamiliar_skills):
                # Bonus: if the folder "posts" doesn't exists, it creates it
                if not os.path.exists("Python\\web-scrapping\\posts"):
                    os.mkdir("Python\\web-scrapping\\posts")

                with open(f"Python\\web-scrapping\\posts\\{index}.txt", "w") as f:
                    f.write(f"Company Name: {company_name.strip()} \n")
                    f.write(f"Required Skills: {skills.strip()} \n")
                    f.write(f"Published Date: {published_date} \n")
                    f.write(f"Experience Required: {experience} \n")
                    f.write(f"More Info: {more_info}")

                print(f"file saved: {index}")


if __name__ == "__main__":
    find_jobs(unfamiliar_skills)
