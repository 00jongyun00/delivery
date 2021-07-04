import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { JwtService } from 'src/jwt/jwt.service';
import { MailService } from 'src/mail/mail.service';
import { User } from './entities/user.entity';
import { Verification } from './entities/verification.entity';
import { UserService } from './users.service';

const mockRepository = {
  findOne: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
};

const mockJwtSerivce = {
  sign: jest.fn(),
  verifiy: jest.fn(),
};

const mockMailSerivce = {
  sendVerificationEmail: jest.fn(),
};

describe('UserService', () => {
  let service: UserService;
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UserService,
        {
          // typeorm 에서 불러오지 않고 mock Repository를 제공할예정
          // mocking = fake function
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
        {
          provide: getRepositoryToken(Verification),
          useValue: mockRepository,
        },
        {
          provide: JwtService,
          useValue: mockJwtSerivce,
        },
        {
          provide: MailService,
          useValue: mockMailSerivce,
        },
      ],
    }).compile();
    service = module.get<UserService>(UserService);
  });

  it('should be definded', () => {
    expect(service).toBeDefined();
  });

  it.todo('createAccount');
  it.todo('login');
  it.todo('findById');
  it.todo('editProfile');
  it.todo('verifyEmail');
});
