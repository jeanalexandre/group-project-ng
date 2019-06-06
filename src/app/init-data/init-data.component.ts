import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ClassroomService } from '../services/classroom.service';
import { StationService } from '../services/station.service';
import { CourseService } from '../services/course.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-data',
  templateUrl: './init-data.component.html',
  styleUrls: ['./init-data.component.scss']
})
export class InitDataComponent implements OnInit {

  private classRoom;
  private jeanalexandre;
  private florian;
  private evan;
  private promo;
  public counter = 0;

  constructor(private authenticationservice: AuthenticationService,
              private userService: UserService,
              private classRoomService: ClassroomService,
              private stationService: StationService,
              private courseService: CourseService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    // Creation d'un compte admin qui initialisera les data de demo
    this.authenticationservice.register({
      role: 'ADMIN_USER',
      email: 'admin@admin.fr',
      firstName: 'Administrateur',
      lastName: 'AD',
      key: '',
      password: 'password'
    }).subscribe(register => {
      // Connexion du compte admin
      this.authenticationservice.login('admin@admin.fr', 'password').subscribe((admin) => {
        // Creation de 4 utilisateurs
        this.florian = this.userService.createUser({
          role: 'TEACHER',
          email: 'florian@blot.fr',
          firstName: 'Florian',
          lastName: 'BLOT',
          key: '189192507531',
          password: 'password'
        }).subscribe(florian => {
          this.florian = florian;
          this.userService.createUser({
            role: 'STUDENT',
            email: 'evan@martho.fr',
            firstName: 'Evan',
            lastName: 'Martho',
            key: '18924025123791',
            password: 'password'
          }).subscribe(evan => {
            this.evan = evan;
            this.userService.createUser({
              role: 'STUDENT',
              email: 'jeanalexandre@gautreau.fr',
              firstName: 'Jean-Alexandre',
              lastName: 'GAUTREAU',
              key: '125307650',
              password: 'password'
            }).subscribe(ja => {
              this.jeanalexandre = ja;
              this.userService.createUser({
                role: 'STUDENT',
                email: 'foo@bar.fr',
                firstName: 'foo',
                lastName: 'bar',
                key: '',
                password: 'password'
              }).subscribe(foo => {
                // Creation de 4 classrooom
                this.classRoomService.createClassroom({
                  name: 'RZ 014',
                  batiment: 'RIZOMM',
                  adresse: '41 Rue du port'
                }).subscribe(classroom => {
                  this.classRoom = classroom;
                  this.classRoomService.createClassroom({
                    name: 'RZ 209 B Ac\'lab',
                    batiment: 'RIZOMM',
                    adresse: '41 Rue du port'
                  }).subscribe(class2 => {
                    this.classRoomService.createClassroom({
                      name: 'RZ 408',
                      batiment: 'RIZOMM',
                      adresse: '41 Rue du port'
                    }).subscribe(class3 => {
                      this.classRoomService.createClassroom({
                        name: 'FV 022 Amphi Choteau',
                        batiment: 'Faculte de Medecine',
                        adresse: '41 Rue du port'
                      }).subscribe(class4 => {
                        // Creation d'un raspberry associe a la classroom 1
                        if (this.stationService.createStation({uid: 'RASP_DEMO_1', idClassroom: this.classRoom.id})) {
                          // Creation d'une promo
                          this.classRoomService.createPromo({
                            name: 'FGES MASTER - M2 III'
                          }).subscribe(promo => {
                            this.promo = promo;
                            // Ajout d'utilisateurs à la promo
                            this.classRoomService.addUserToPromo(this.promo.id, this.evan.id).subscribe(userPromo => {
                              this.classRoomService.addUserToPromo(this.promo.id, this.jeanalexandre.id).subscribe(userPromo2 => {
                                this.courseService.createCourse({
                                  name: 'RESEAU',
                                  idClassroom: this.classRoom.id,
                                  idTeacher: this.florian.id,
                                  idPromo: this.promo.id,
                                  hourBeginning: '2019-06-05T08:00:00.238Z',
                                  hourEnding: '2019-06-05T18:00:00.238Z'
                                }).subscribe(course1 => {
                                    this.counter++;
                                  }
                                );
                                this.courseService.createCourse({
                                  name: 'BIG DATA',
                                  idClassroom: this.classRoom.id,
                                  idTeacher: this.florian.id,
                                  idPromo: this.promo.id,
                                  hourBeginning: '2019-06-06T08:00:00.238Z',
                                  hourEnding: '2019-06-06T18:00:00.238Z'
                                }).subscribe(course2 => {
                                  this.counter++;
                                });
                                this.courseService.createCourse({
                                  name: 'PROJET DE GROUPE',
                                  idClassroom: this.classRoom.id,
                                  idTeacher: this.florian.id,
                                  idPromo: this.promo.id,
                                  hourBeginning: '2019-06-07T08:00:00.238Z',
                                  hourEnding: '2019-06-07T18:00:00.238Z'
                                }).subscribe(course3 => {
                                  this.counter++;
                                });
                                this.courseService.createCourse({
                                  name: 'EXAM RESEAU',
                                  idClassroom: this.classRoom.id,
                                  idTeacher: this.florian.id,
                                  idPromo: this.promo.id,
                                  hourBeginning: '2019-06-11T08:00:00.238Z',
                                  hourEnding: '2019-06-11T18:00:00.238Z'
                                }).subscribe(course4 => {
                                  this.counter++;
                                });
                                this.courseService.createCourse({
                                  name: 'PROJET PERSO',
                                  idClassroom: this.classRoom.id,
                                  idTeacher: this.florian.id,
                                  idPromo: this.promo.id,
                                  hourBeginning: '2019-06-12T08:00:00.238Z',
                                  hourEnding: '2019-06-12T18:00:00.238Z'
                                }).subscribe(course5 => {
                                  this.counter++;
                                });
                                this.courseService.createCourse({
                                  name: 'PROJET PROFESSIONNEL',
                                  idClassroom: this.classRoom.id,
                                  idTeacher: this.florian.id,
                                  idPromo: this.promo.id,
                                  hourBeginning: '2019-06-13T08:00:00.238Z',
                                  hourEnding: '2019-06-13T18:00:00.238Z'
                                }).subscribe(course6 => {
                                  this.counter++;
                                });
                              });
                            });
                          });
                        }
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }

  public logout() {
    this.authenticationservice.logout();
    this.router.navigate(['/login']);
  }
}
