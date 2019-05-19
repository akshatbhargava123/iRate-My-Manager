import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { BackendProvider } from '../../providers/backend/backend';
import { Feedback } from '../../app/app.model';

@IonicPage()
@Component({
  selector: 'page-view-feedbacks',
  templateUrl: 'view-feedbacks.html',
})
export class ViewFeedbacksPage {

  feedbacks: Feedback[] = [];

  starRating = {
    'Entry Level Associate': {
      total: 0,
      average: 0,
      length: 0
    },
    'Lower Management': {
      total: 0,
      average: 0,
      length: 0
    },
    'Middle Management': {
      total: 0,
      average: 0,
      length: 0
    },
    'Upper Management': {
      total: 0,
      average: 0,
      length: 0
    },
    'Leadership': {
      total: 0,
      average: 0,
      length: 0
    }
  };

  behaviourRating = {
    'Friendly': 0,
    'Angry': 0,
    'Neutral': 0,
    'Busy': 0,
    'Lazy': 0,
    'Partial': 0
  };

  skillsRating = {
    'Entry Level Associate': {
      'Excellent Communicator': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Knows his/her job': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Soft Spoken': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Supportive': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Fearless': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Motivator': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
    },
    'Lower Management': {
      'Excellent Communicator': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Knows his/her job': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Soft Spoken': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Supportive': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Fearless': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Motivator': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
    },
    'Middle Management': {
      'Excellent Communicator': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Knows his/her job': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Soft Spoken': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Supportive': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Fearless': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Motivator': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
    },
    'Upper Management': {
      'Excellent Communicator': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Knows his/her job': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Soft Spoken': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Supportive': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Fearless': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Motivator': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
    },
    'Leadership': {
      'Excellent Communicator': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Knows his/her job': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Soft Spoken': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Supportive': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Fearless': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
      'Motivator': {
        'Strongly Agree': 0,
        'Agree': 0,
        'Can Not Say': 0,
        'Disagree': 0,
        'Strongly Disagree': 0,
      },
    },
  };

  SKILL_MAP = {
    'Strongly Agree': 5,
    'Agree': 4,
    'Can Not Say': 3,
    'Disagree': 2,
    'Strongly Disagree': 1,
    'undefined': 0
  }

  chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            stepSize: 1,
            min: 0,
            max: 5
          }
        }
      ]
    }
  };

  LIGHT_COLORS = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
  ];

  COLORS = [
    'rgba(255,99,132,1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
  ];

  @ViewChild('barCanvas1') barCanvas1;
  barChart1: any;

  @ViewChild('barCanvas2') barCanvas2;
  barChart2: any;

  selectedSkill: 'Entry Level Associate' | 'Lower Management' | 'Middle Management' | 'Upper Management' | 'Leadership'

  @ViewChild('skillRatingCanvas') skillRatingCanvas;
  skillRatingChart: any;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private backend: BackendProvider
  ) { }

  ionViewWillLoad() {
    // localStorage.setItem('company', JSON.stringify(this.navParams.get('company')));
    const company = this.navParams.get('company')/* || JSON.parse(localStorage.getItem('company'))*/;
    this.backend.getFeedbacks().subscribe(feedbacks => {
      this.feedbacks = feedbacks.filter(feedback => feedback.personalDetails.company == company);

      // Total star rating
      this.feedbacks.forEach(feedback => {
        // calculate total star rating
        this.starRating[feedback.personalDetails.designation].length += 1;
        this.starRating[feedback.personalDetails.designation].total += feedback.starRating;

        // calculate average manager behavioural rating
        Object.keys(this.behaviourRating).forEach(key => {
          if (feedback.managerBehaviour.indexOf(key.toLowerCase()) != -1) {
            this.behaviourRating[key] += 1;
          };
        });

        const levels = ['Excellent Communicator', 'Knows his/her job', 'Soft Spoken', 'Supportive', 'Fearless', 'Motivator'];
        levels.forEach(level => {
          const { value } = feedback.managerSkills.find(f => f.name == level);

        })

      });

      // skill rating
      Object.keys(this.skillsRating).forEach(desigKey => {
        const filteredFeedbacks = this.feedbacks.filter(f => f.personalDetails.designation == desigKey);

        filteredFeedbacks.forEach(feedback => {
          this.skillsRating[desigKey][feedback.managerSkills[0].name][feedback.managerSkills[0].value] += 1;
          this.skillsRating[desigKey][feedback.managerSkills[1].name][feedback.managerSkills[1].value] += 1;
          this.skillsRating[desigKey][feedback.managerSkills[2].name][feedback.managerSkills[2].value] += 1;
          this.skillsRating[desigKey][feedback.managerSkills[3].name][feedback.managerSkills[3].value] += 1;
          this.skillsRating[desigKey][feedback.managerSkills[4].name][feedback.managerSkills[4].value] += 1;
          this.skillsRating[desigKey][feedback.managerSkills[5].name][feedback.managerSkills[5].value] += 1;
        });

      });

      Object.keys(this.skillsRating).forEach(desigKey => {
        Object.keys(this.skillsRating[desigKey]).forEach(skillKey => {
          const largest = Object.keys(this.skillsRating[desigKey][skillKey]).reduce((largest, curr) => {
            const skill = this.skillsRating[desigKey][skillKey];
            if (skill[curr] == 0) return largest;
            if (largest == 'undefined') return curr;
            return skill[largest] < skill[curr] ? curr : largest;
          }, 'undefined')
          this.skillsRating[desigKey][skillKey].largest = this.SKILL_MAP[largest];
          // console.log(desigKey, skillKey, ' : ', this.skillsRating[desigKey][skillKey].largest);
        });
      });

      // calculate average star rating
      Object.keys(this.starRating).forEach(key => {
        this.starRating[key].average = this.starRating[key].total / this.starRating[key].length;
        this.starRating[key].average = this.starRating[key].average || 0;
        // console.log(this.starRating[key].average);
      });

      this.initCharts();
    });
  }

  getDataInstance(label: string, value, i?) {
    return {
      label,
      data: [value],
      backgroundColor: [
        this.LIGHT_COLORS[i]
      ],
      borderColor: [
        this.COLORS[i]
      ],
      borderWidth: 1
    };
  }

  initCharts() {

    // Avg Manager Star Rating
    this.barChart1 = new Chart(this.barCanvas1.nativeElement, {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [
          this.getDataInstance('Entry Level Associate', this.starRating['Entry Level Associate'].average, 0),
          this.getDataInstance('Lower Management', this.starRating['Lower Management'].average, 1),
          this.getDataInstance('Middle Management', this.starRating['Middle Management'].average, 2),
          this.getDataInstance('Upper Management', this.starRating['Upper Management'].average, 3),
          this.getDataInstance('Leadership', this.starRating['Leadership'].average, 4)
        ]
      },
      options: this.chartOptions
    });

    // Avg Manager Behavioural Rating
    this.barChart2 = new Chart(this.barCanvas2.nativeElement, {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [
          this.getDataInstance('Friendly', this.behaviourRating.Friendly, 0),
          this.getDataInstance('Angry', this.behaviourRating.Angry, 1),
          this.getDataInstance('Neutral', this.behaviourRating.Neutral, 2),
          this.getDataInstance('Busy', this.behaviourRating.Busy, 3),
          this.getDataInstance('Lazy', this.behaviourRating.Lazy, 4),
          this.getDataInstance('Partial', this.behaviourRating.Partial, 5)
        ]
      },
      options: this.chartOptions
    });

    this.skillRatingChart = new Chart(this.skillRatingCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: [''],
        datasets: []
      },
      options: this.chartOptions
    });

  }

  onSkillSelect(desig) {

    this.selectedSkill = desig;
    // console.log(this.skillsRating[desig]);

    // empty dataset
    this.skillRatingChart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });

    this.skillRatingChart.data.datasets = [
      ...Object.keys(this.skillsRating[desig]).map((skillKey, i) => {
        return this.getDataInstance(skillKey, this.skillsRating[desig][skillKey].largest, i);
      }),
    ];

    this.skillRatingChart.update();

  }

  ionViewDidLoad() {
    this.initCharts();
  }

}
